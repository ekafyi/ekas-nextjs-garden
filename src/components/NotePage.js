/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";
import hydrate from "next-mdx-remote/hydrate";
import { SEO, SkipLink, Nav, ErrorPage } from "components";
// import * as components from "components/mdx";

import CodeBlock from "components/CodeBlock";
const components = { code: CodeBlock };

const nitip = {
  maxWidth: 1088,
  mx: "auto",
  h2: {
    mb: 6,
    "&:not(:first-child)": {
      mt: 8,
    },
  },
};

export default function NotePage({ mdxContent, frontMatter }) {
  const router = useRouter();

  if (!frontMatter || !mdxContent) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <SEO title={frontMatter.title} />
      <SkipLink />
      <main sx={{ variant: "layout.container" }}>
        <Nav curPath={router.asPath} />
        <article sx={{ ...nitip }}>
          <h1 sx={{ variant: "components.note.single.title" }}>
            {frontMatter.title}
          </h1>
          <div sx={{ variant: "components.note.single.body" }}>
            {hydrate(mdxContent, components)}
          </div>
        </article>
      </main>
    </>
  );
}
