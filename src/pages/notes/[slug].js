import MDX from "@mdx-js/runtime";
import ReactDOM from "react-dom/server";
import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";

import * as components from "components";

export async function getStaticPaths() {
  const paths = getAllSlugsStaticPaths("notes");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const note = getPost(slug, "notes");
  if (!note) {
    return { props: { mdxHtml: null, frontMatter: {} } };
  }
  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX components={components}>{note.mdx}</MDX>
      ),
      frontMatter: note.frontMatter || {},
    },
  };
}

export default components.PostPage;
