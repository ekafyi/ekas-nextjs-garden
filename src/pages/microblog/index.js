/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import usePagination from "../../hooks/use-pagination";
import { getAllPosts } from "../../utils/get-mdx";
import { mdToJsxComponents } from "../../utils/get-components";

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
      <header>
        <h1>eka’s microblog.</h1>
        <span sx={{ color: "mutedFg" }}>
          short, ephemeral, mostly trivial, often personal updates.
        </span>
      </header>
      {allMdx && (
        <>
          {currentPosts.map((item) => {
            return (
              <article key={item.slug} sx={{ my: 5 }}>
                <div sx={{ color: "mutedFg" }}>
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
                <Markdown options={{ overrides: mdToJsxComponents }}>
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
