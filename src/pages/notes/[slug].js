/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";

import { getAllSlugsStaticPaths, getPost } from "../../utils/get-mdx";
import { SEO, SkipLink, Nav, ErrorPage } from "components";
// import * as components from "components";

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
  const mdxContent = await renderToString(post.mdx);
  return {
    props: {
      mdxContent,
      frontMatter: post.frontMatter || {},
    },
  };
}

export default function NotePage({ mdxContent, frontMatter }) {
  const router = useRouter();

  if (!frontMatter || !mdxContent) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <SEO title={frontMatter.title} />
      <SkipLink />
      <main sx={{ py: 4, px: [2, null, 6] }}>
        <Nav curPath={router.asPath} />
        <Styled.h4 as="h1" sx={{ mt: [4, null, 8, 12], mb: [4, null, 8] }}>
          {frontMatter.title}
        </Styled.h4>
        <div>{hydrate(mdxContent)}</div>
      </main>
    </>
  );
}
