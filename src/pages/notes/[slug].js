import renderToString from "next-mdx-remote/render-to-string";
import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";
import { NotePage } from "components";
// import * as components from "components/mdx";

import CodeBlock from "components/CodeBlock";
const components = { code: CodeBlock };

export async function getStaticPaths() {
  const paths = getAllSlugsStaticPaths("notes");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPost(slug, "notes");
  if (!post) return { props: { mdxContent: null, frontMatter: {} } };
  const mdxContent = await renderToString(post.mdx, components);
  return {
    props: {
      mdxContent,
      frontMatter: post.frontMatter || {},
    },
  };
}

export default NotePage;
