/** @jsx jsx */
import { jsx } from "theme-ui";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
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
      <h1 sx={{ color: "primary" }}>
        Notes (Microblog?) (what do i want to call this?)
      </h1>
      {allMdx && (
        <>
          {allMdx.map((item) => {
            return (
              <article key={item.slug} sx={{ my: 4 }}>
                <div sx={{ color: "muted" }}>
                  <Link
                    href={item.dynHref}
                    as={item.slug}
                    prefetch={false}
                    passHref
                  >
                    <a>{item.frontMatter.date} #</a>
                  </Link>
                </div>
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
