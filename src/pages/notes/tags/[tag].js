import { getAllTagsStaticPaths, getPostsByTag } from "../../../utils/get-mdx";

import { PostSnippet } from "components";

export async function getStaticPaths() {
  const paths = getAllTagsStaticPaths("notes");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tag } }) {
  return {
    props: {
      tag,
      // allMdx: getPostsByTag(tag, "notes", "slug"),
    },
  };
}

export default function Tag({ tag }) {
  return (
    <main>
      <h1>Tag: {tag || "unknown"}</h1>
      {/* {allMdx && (
        <ul>
          {allMdx.map((item) => (
            <li key={item.slug}>
              <PostSnippet {...item} />
            </li>
          ))}
        </ul>
      )} */}
    </main>
  );
}
