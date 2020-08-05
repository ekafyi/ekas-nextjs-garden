/** @jsx jsx */
import { jsx } from "theme-ui";
import Markdown from "markdown-to-jsx";
import React from "react";
import { render } from "react-dom";

// import Link from "next/link";
// import { PostSnippet } from "components";
import { getAllPosts } from "../../utils/get-mdx";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("notes", "slug"),
    },
  };
}

export default function Notes({ allMdx }) {
  return (
    <main>
      <h1 sx={{ color: "primary" }}>Notes</h1>
      {allMdx && (
        <>
          {allMdx.map((item) => {
            return (
              <article key={item.slug} sx={{ my: 4 }}>
                <h2>{item.frontMatter.title}</h2>
                <Markdown>{item.mdx}</Markdown>
              </article>
            );
          })}
        </>
      )}
    </main>
  );
}
