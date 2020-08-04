import { getAllPosts } from "../../utils/get-mdx";

import { PostSnippet } from "components";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("posts", "slug"),
    },
  };
}

export default function Posts({ allMdx }) {
  return (
    <main>
      <h1>Posts</h1>
      {allMdx && (
        <ul>
          {allMdx.map((item) => (
            <li key={item.slug}>
              <PostSnippet {...item} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
