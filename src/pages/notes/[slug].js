import renderToString from "next-mdx-remote/render-to-string";
import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";
import { NotePage } from "components";

import components from "components/mdx";

// import * as mdxComponents from "components/mdx";
// import dynamic from "next/dynamic";
// const CodeBlock = dynamic(() => import("../../components/mdx/CodeBlock"));
// const components = {
//   pre: ({ children }) => <>{children}</>,
//   code: CodeBlock,
//   Mug: mdxComponents.Mug,
// };

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
