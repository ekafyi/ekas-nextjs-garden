import React, { useState, useEffect } from "react";
// import Fuse from "fuse.js";
// import TagList from "./TagList";

const fuseOptions = {
  threshold: 0.5,
  location: 0,
  distance: 100,
  minMatchCharLength: 3,
  // shouldSort: true,
  // includeScore: true,
  useExtendedSearch: true,
  keys: ["frontMatter.title", "frontMatter.tags", "frontMatter.techs"],
};

export default function SearchNotes({ allMdx, handleFilter }) {
  const posts = allMdx;
  const [searchValue, setSearchValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [searchTechs, setSearchTechs] = useState([]);

  // // const tags = [...new Set(posts.flatMap(({ tags }) => tags))];

  useEffect(() => {
    const runFuse = async (queries) => {
      console.log("fuuuuuuuuse 🏃🏽‍♀️");
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
    <div>
      <div>
        {/* <TagList tags={tags} value={searchTags} onChange={setSearchTags} /> */}
      </div>
      <input type="text" value={searchValue} onChange={onChange} />
    </div>
  );
}
