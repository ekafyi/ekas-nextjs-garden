/** @jsx jsx */
import { jsx } from "theme-ui";
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
      <main sx={{ variant: "layout.container" }}>
        <Nav />
        <div id="main" sx={{ variant: "components.note.index.container" }}>
          <header sx={{ variant: "components.note.index.header" }}>
            <h1 sx={{ variant: "text.pageHeading" }}>Notes</h1>
            <p sx={{ variant: "components.note.index.subheader" }}>
              {dummyData.about}
            </p>
          </header>
          <div sx={{ variant: "components.note.index.side" }}>
            <button
              sx={{ variant: "components.note.index.tag" }}
              className="is-active"
            >
              All
            </button>
            {dummyData.sections.map((s) => (
              <button key={s} sx={{ variant: "components.note.index.tag" }}>
                {s}
              </button>
            ))}
          </div>
          <div id="posts" sx={{ variant: "components.note.index.entries" }}>
            {allMdx && (
              <>
                {allMdx.map((item) => (
                  <NoteSnippet
                    key={item.slug}
                    {...item}
                    variant="components.note.index.snippet"
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
