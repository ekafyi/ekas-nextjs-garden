/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { SEO, SkipLink, Nav, NoteSnippet } from "components";
import { getAllPosts } from "../../utils/get-mdx";

import * as dummyData from "../../../content/dummy/dummy-notes";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("notes", "slug"),
    },
  };
}

export default function Notes({ allMdx }) {
  return (
    <>
      <SEO title="Notes" />
      <SkipLink />
      <SkipLink href="#posts">Skip to posts</SkipLink>
      <main sx={{ py: 4, px: [2, null, 6] }}>
        <Nav />
        <div id="main" sx={{ variant: "components.note.container" }}>
          <header sx={{ variant: "components.note.header" }}>
            <Styled.h1>Notes</Styled.h1>
            <p sx={{ variant: "components.note.subheader" }}>
              {dummyData.about}
            </p>
          </header>
          <div sx={{ variant: "components.note.side" }}>
            <button
              sx={{ variant: "components.note.tag" }}
              className="is-active"
            >
              All
            </button>
            {dummyData.sections.map((s) => (
              <button key={s} sx={{ variant: "components.note.tag" }}>
                {s}
              </button>
            ))}
          </div>
          <div id="posts" sx={{ variant: "components.note.entries" }}>
            {allMdx && (
              <>
                {allMdx.map((item) => (
                  <NoteSnippet
                    key={item.slug}
                    {...item}
                    variant="components.note.snippet"
                  />
                ))}
                {allMdx.map((item) => (
                  <NoteSnippet
                    key={item.slug}
                    {...item}
                    variant="components.note.snippet"
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
