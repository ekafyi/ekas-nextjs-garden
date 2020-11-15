/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";

// import Fuse from "fuse.js"; // leave to debug dynamic import issue
import TaxonomyFilter from "./TaxonomyFilter";

const fuseOptions = {
  threshold: 0.3,
  location: 0,
  distance: 100,
  minMatchCharLength: 3,
  useExtendedSearch: true,
  keys: ["frontMatter.title", "frontMatter.tags"],
};

export default function SearchFilterNotes({ allMdx, handleFilter }) {
  const posts = allMdx;
  const [searchValue, setSearchValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  // duplicate all `searchTags` stuff if adding new taxonomy type.

  useEffect(() => {
    const runFuse = async (queries) => {
      const Fuse = (await import("fuse.js")).default; // Dynamically load fuse.js
      const fuse = new Fuse(posts, fuseOptions);
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    };

    if (searchValue === "" && searchTags.length === 0) {
      handleFilter(posts);
    } else {
      // Allow for a search for tag
      const formattedTags = [
        ...searchTags.map((item) => ({ "frontMatter.tags": item })),
      ];
      const formattedTitle = searchValue.length ? [{ "frontMatter.title": searchValue }] : []; // prettier-ignore
      const queries = {
        $or: [
          { "frontMatter.tags": searchValue },
          { "frontMatter.title": searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      };
      // console.log("queries ", queries);
      runFuse(queries);
    }
  }, [searchValue, searchTags]);

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
      <label htmlFor="q">
        <span className="sr-only">search notes by keyword</span>
        <input
          type="text"
          name="q"
          placeholder="search keyword..."
          value={searchValue}
          onChange={onChange}
          sx={{
            width: "100%",
            fontSize: 0,
            fontWeight: "bold",
            borderRadius: 8,
            px: 3,
            py: 2,
            mb: 4,
            borderRadius: "2rem",
            border: "2px solid",
            backgroundColor: "background",
            "&:focus,&:hover": {
              borderStyle: "solid",
            },
            "&:focus": {
              backgroundColor: "muted",
              outline: "none",
              boxShadow: "2px 2px 2px 2px currentColor",
            },
            "::placeholder": {
              color: "mutedFg",
              fontWeight: "medium",
            },
          }}
        />
      </label>

      <TaxonomyFilter onChangeTags={setSearchTags} />
    </>
  );
}
