/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import Link from "next/link";
import { PostSnippet } from "components";
import { getAllPosts, getAllTags } from "../../utils/get-mdx";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("posts", "slug"),
      allTags: getAllTags("posts"),
    },
  };
}

export default function Posts({ allMdx, allTags }) {
  return (
    <main sx={{ p: 4 }}>
      <Styled.h1 sx={{ mb: 8 }}>Posts</Styled.h1>
      {allMdx && (
        <ul>
          {allMdx.map((item) => (
            <li key={item.slug}>
              <PostSnippet {...item} />
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h2>Post Tags</h2>
      {allTags && (
        <ul>
          {allTags.map((tag) => (
            <li key={tag} sx={{ ml: 2 }}>
              <Link href="/posts/tags/[tag]" as={`/posts/tags/${tag}`} passHref>
                <a>{`#${tag}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
