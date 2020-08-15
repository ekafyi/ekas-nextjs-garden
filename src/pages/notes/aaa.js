/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { SEO, SkipLink, Nav, NoteSnippet } from "components";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import * as dummyData from "../../../content/dummy/dummy-notes";

export async function getStaticProps() {
  // mdx text - can be from a local file, database, anywhere
  const source = "Some **mdx** text. _yay!_";
  const mdx = await renderToString(source);
  return { props: { mdx } };
}

export default function Notes({ mdx }) {
  const content = hydrate(mdx);

  return (
    <>
      <SkipLink />
      <main sx={{ py: 4, px: [2, null, 6] }}>
        <SEO title="Notes aaa" />
        <Nav />
        <div id="main">
          <header>
            <Styled.h1>coba ya</Styled.h1>
          </header>
          <div>{content}</div>
        </div>
      </main>
    </>
  );
}
