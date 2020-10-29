/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import {
  SEO,
  SkipLink,
  Nav,
  NoteSnippet,
  SearchFilterNotes,
  Layout,
} from "components";
import { getAllPosts } from "src/utils/get-mdx";
import { createCacheNotes } from "src/utils/related-notes";
import { copy } from "site.config.yml";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("notes", "slug"),
      // allTags: getAllTags("notes"), // Import from get-mdx and enable if we need tags list from posts.
    },
  };
}

export default function Notes({ allMdx }) {
  const [filteredMdx, setFilteredMdx] = useState(allMdx);

  useEffect(() => {
    if (allMdx.length) {
      const cacheNotes = createCacheNotes(allMdx);
      window.localStorage.setItem("recentNotes", JSON.stringify(cacheNotes));
    }
  }, []);

  const handleFilter = (data) => {
    setFilteredMdx(data);
  };

  const { NOTES_TAGLINE, NOTES_META_DESC } = copy;

  return (
    <>
      <SEO
        title="Eka’s Notes"
        description={NOTES_META_DESC}
        // socialImg="https://ekas-nextjs-garden-git-feat-social-image.ekafyi.vercel.app/api/social-img" // coba
      />
      <SkipLink href="#main">Skip to search/filter</SkipLink>
      <SkipLink href="#posts">Skip to posts</SkipLink>
      <Layout>
        <Nav />
        <div id="main" sx={{ variant: "components.notes.container" }}>
          <header sx={{ variant: "components.notes.header" }}>
            <h1 sx={{ variant: "text.pageHeading" }}>Notes</h1>
            <p sx={{ variant: "components.notes.subheader" }}>
              {NOTES_TAGLINE}
            </p>
          </header>
          <div sx={{ variant: "components.notes.side" }}>
            <SearchFilterNotes allMdx={allMdx} handleFilter={handleFilter} />
          </div>
          <div id="posts" sx={{ variant: "components.notes.entries" }}>
            {/* Change allMdx | filteredMdx as needed */}
            {filteredMdx?.map((item) => (
              <NoteSnippet key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
