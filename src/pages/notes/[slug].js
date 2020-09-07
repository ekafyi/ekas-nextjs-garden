import renderToString from "next-mdx-remote/render-to-string";
import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";
import { NotePage } from "components";

import dynamic from "next/dynamic";
import mdxComponents from "components/mdx";

const CodeBlock = dynamic(() => import("../../components/mdx/CodeBlock")); // It's somehow faster when imported here vs from components/mdx 🤔.
const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,
  ...mdxComponents,
};

const options = { remarkPlugins: [require("remark-slug")] };

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
  const mdxContent = await renderToString(post.mdx, components, options);

  // ??
  const toc = await renderToString(post.toc);
  // ??

  return {
    props: {
      mdxContent,
      frontMatter: post.frontMatter || {},
      // toc: post.toc,
      toc: toc.renderedOutput,
    },
  };
}

export default NotePage;
