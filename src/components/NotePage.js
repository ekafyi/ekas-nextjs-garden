/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";
import hydrate from "next-mdx-remote/hydrate";
import { SEO, SkipLink, Nav, ErrorPage } from "components";

import dynamic from "next/dynamic";
import mdxComponents from "components/mdx";

const CodeBlock = dynamic(() => import("./mdx/CodeBlock")); // It's somehow faster when imported here vs from components/mdx 🤔.
const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,
  ...mdxComponents,
};

const tempStyle = {
  maxWidth: 672,
  mx: "auto",
};

const fallbackCss = "leading-6 md:leading-7";

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
        <article id="main" className={fallbackCss}>
          <header
            sx={{ variant: "components.note.single.header", ...tempStyle }}
          >
            <Styled.h1 sx={{ variant: "components.note.single.title" }}>
              {frontMatter.title}
            </Styled.h1>
            <p sx={{ variant: "components.note.single.excerpt" }}>
              Learning GraphQL from zero to project with friends!
            </p>
            <div sx={{ variant: "components.note.single.byline" }}>
              <div
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "muted",
                  mr: 2,
                }}
              />
              <strong sx={{ fontSize: 2, mr: 3 }}>Eka</strong>
              <span sx={{ fontSize: 1, color: "mutedFg" }}>
                20 Aug 2020&nbsp;
                {/* <em>updated 24 Aug 2020</em> */}
              </span>
            </div>
          </header>

          <div sx={{ variant: "components.note.single.body", ...tempStyle }}>
            {hydrate(mdxContent, components)}
          </div>

          {/* tags */}
          <div
            sx={{ variant: "components.note.single.tagsList", ...tempStyle }}
          >
            {["learning notes", "book club", "some other tag"].map((tag) => (
              <a sx={{ variant: "components.note.single.tag" }} href="#">
                {tag}
              </a>
            ))}
            <a
              sx={{
                variant: "components.note.single.tag",
                background: "#d43088",
                color: "#fff",
              }}
              href="#"
            >
              graphql
            </a>
          </div>
          {/* /tags */}

          <a href="#main" sx={{ variant: "links.backToTop" }}>
            &uarr; to top
          </a>
          <a href="#main" sx={{ variant: "links.backToTop", ml: 4 }}>
            &larr; notes
          </a>
        </article>
      </main>
    </>
  );
}
