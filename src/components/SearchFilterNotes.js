import React, { useState, useEffect } from "react";
import TagsSelect from "./TagsSelect";

const fuseOptions = {
  threshold: 0.3,
  location: 0,
  distance: 100,
  minMatchCharLength: 3,
  useExtendedSearch: true,
  keys: ["frontMatter.title", "frontMatter.tags", "frontMatter.techs"],
};

export default function SearchFilterNotes({ allMdx, handleFilter }) {
  const posts = allMdx;
  const [searchValue, setSearchValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [searchTechs, setSearchTechs] = useState([]);

  useEffect(() => {
    const runFuse = async (queries) => {
      const Fuse = (await import("fuse.js")).default; // Dynamically load fuse.js
      const fuse = new Fuse(posts, fuseOptions);
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    };

    if (
      searchValue === "" &&
      searchTags.length === 0 &&
      searchTechs.length === 0
    ) {
      handleFilter(posts);
    } else {
      // Allow for a search for tag
      const formattedTags = [
        ...searchTags.map((item) => ({ "frontMatter.tags": item })),
      ];
      const formattedTechs = [
        ...searchTechs.map((item) => ({ "frontMatter.techs": item })),
      ];
      const formattedTitle = searchValue.length ? [{ "frontMatter.title": searchValue }] : []; // prettier-ignore
      const queries = {
        $or: [
          { "frontMatter.tags": searchValue },
          { "frontMatter.techs": searchValue },
          { "frontMatter.title": searchValue },
          {
            $and: [...formattedTags, ...formattedTechs, ...formattedTitle],
          },
        ],
      };
      console.log("queries ", queries);
      runFuse(queries);
    }
  }, [searchValue, searchTags, searchTechs]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((included) => included != tag));
    } else {
      setSearchTags([...searchTags, tag]);
    }
  };

  return (
    <>
      <input type="text" value={searchValue} onChange={onChange} />

      <TagsSelect
        // value={searchTags}
        value={[]}
        onChangeTags={setSearchTags}
        onChangeTechs={setSearchTechs}
      />

      {/* 
        <button
          className={BUTTON_CSS}
          type="button"
          onClick={() => {
            setSearchTechs(["gatsby"]);
          }}
        >
          tech
        </button> */}
    </>
  );
}
