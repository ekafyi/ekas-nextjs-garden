/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { useRouter } from "next/router";
import MDX from "@mdx-js/runtime";
import ReactDOM from "react-dom/server";
import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";

import { SEO, Nav } from "components";

import * as components from "components";

export async function getStaticPaths() {
  const paths = getAllSlugsStaticPaths("notes");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPost(slug, "notes");
  if (!post) {
    return { props: { mdxHtml: null, frontMatter: {} } };
  }
  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX components={components}>{post.mdx}</MDX>
      ),
      frontMatter: post.frontMatter || {},
    },
  };
}

// ! coba
export default function NotePage({ mdxHtml, frontMatter }) {
  const router = useRouter();

  // TODO if error (if !frontMatter || !mdxHtml)

  return (
    <>
      <SEO title={frontMatter.title} />
      <main sx={{ py: 4, px: [2, null, 6] }}>
        <Nav curPath={router.asPath} />
        <Styled.h4 as="h1" sx={{ mt: [4, null, 8, 12], mb: [4, null, 8] }}>
          {frontMatter.title}
        </Styled.h4>
        <div
          dangerouslySetInnerHTML={{
            __html: mdxHtml,
          }}
        />
      </main>
    </>
  );
}
