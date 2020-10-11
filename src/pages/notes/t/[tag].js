import { getAllTagsStaticPaths, getPostsByTag } from "src/utils/get-mdx";

// import { PostSnippet } from "components";

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
      allPosts: getPostsByTag(tag, "notes", "tag"),
    },
  };
}

export default function Tag({ tag, allPosts }) {
  return (
    <main>
      <h1>Tag: {tag || "unknown"}</h1>
      {allPosts && (
        <ul>
          {allPosts.map((item) => (
            <li key={item.slug}>{item.frontMatter.title || ""}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
