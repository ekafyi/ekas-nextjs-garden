/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { SEO, SkipLink, Nav, NoteSnippet } from "components";
import { getAllPosts, getAllTags } from "../../utils/get-mdx";
import SearchNotes from "../../components/SearchNotes";

import * as dummyData from "../../../content/dummy/dummy-notes";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("notes", "slug"),
      allTags: getAllTags("notes"),
    },
  };
}

export default function Notes({ allMdx, allTags }) {
  const [filteredMdx, setFilteredMdx] = useState(allMdx);
  // console.log("filteredMdx ", filteredMdx);

  const handleFilter = (data) => {
    setFilteredMdx(data);
  };

  return (
    <>
      <SEO title="Notes" />
      <SkipLink />
      <SkipLink href="#posts">Skip to posts</SkipLink>
      <main sx={{ variant: "layout.container" }}>
        <Nav />
        <div id="main" sx={{ variant: "components.notes.container" }}>
          <header sx={{ variant: "components.notes.header" }}>
            <h1 sx={{ variant: "text.pageHeading" }}>Notes</h1>
            <p sx={{ variant: "components.notes.subheader" }}>
              {dummyData.about}
            </p>
          </header>
          <div sx={{ variant: "components.notes.side" }}>
            {/* TODO do me! */}
            <SearchNotes allMdx={allMdx} handleFilter={handleFilter} />

            {/* {dummyData.sections.map((s) => (
              <button key={s} sx={{ variant: "components.notes.tag" }}>
                {s}
              </button>
            ))} */}

            {/*  */}
          </div>
          <div id="posts" sx={{ variant: "components.notes.entries" }}>
            {/* {allMdx?.map((item) => (
              <NoteSnippet key={item.slug} {...item} />
            ))} */}
            {filteredMdx?.map((item) => (
              <NoteSnippet key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
