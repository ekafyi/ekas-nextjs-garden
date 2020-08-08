/** @jsx jsx */
import { jsx } from "theme-ui";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

import { useState } from "react";
import usePagination from "../../hooks/use-pagination";

// import Link from "next/link";
// import { PostSnippet } from "components";
import { getAllPosts } from "../../utils/get-mdx";

import * as components from "components";

const BUTTON_CSS =
  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("microblog", "slug"),
    },
  };
}

export default function MicroblogPosts({ allMdx }) {
  const { getNext, currentPage, currentData, maxPage } = usePagination(allMdx);
  const currentPosts = currentData();

  // = = =

  return (
    <main>
      <h1 sx={{ color: "primary" }}>Microblog</h1>
      <p>short, ephemeral, mostly trivial, often personal updates.</p>
      {allMdx && (
        <>
          {currentPosts.map((item) => {
            return (
              <article key={item.slug} sx={{ my: 5 }}>
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
                <Markdown
                  options={{
                    overrides: {
                      Mug: {
                        component: components.Mug,
                      },
                    },
                  }}
                >
                  {item.mdx}
                </Markdown>
              </article>
            );
          })}
          {currentPage !== maxPage ? (
            <button onClick={getNext} className={BUTTON_CSS}>
              load more
            </button>
          ) : (
            <>{maxPage !== 1 && <em>No more posts available.</em>}</>
          )}
        </>
      )}
    </main>
  );
}
