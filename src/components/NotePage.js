/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";
import hydrate from "next-mdx-remote/hydrate";
import { SEO, SkipLink, Nav, ErrorPage, Footer } from "components";

import TOC from "./NoteTemp/TOC";
import Tags from "./NoteTemp/Tags";
import Byline from "./NoteTemp/Byline";
import Share from "./NoteTemp/Share";
import Series from "./NoteTemp/Series";
import Related from "./NoteTemp/Related";
import BackLinks from "./NoteTemp/BackLinks";

import dynamic from "next/dynamic";
import mdxComponents from "components/mdx";

const CodeBlock = dynamic(() => import("./mdx/CodeBlock")); // It's somehow faster when imported here vs from components/mdx 🤔.
const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,
  ...mdxComponents,
};

const fallbackCss = "leading-6 md:leading-7";

const TEMP_TEST_TITLE = "GraphQL Adventure Club at the Party-Corgi Discord";
const TEMP_TEST_EXCERPT = "Learning GraphQL from zero to project with friends!";
const TEMP_HAS_TOC = [
  TEMP_TEST_TITLE,
  "Set up optional image field from Contentful in Gatsby GraphQL",
];

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

        <article id="main" sx={{ variant: "components.note.single.container" }}>
          <header sx={{ variant: "components.note.single.header" }}>
            <Styled.h1 sx={{ variant: "components.note.single.title" }}>
              {frontMatter.title}
            </Styled.h1>
            {frontMatter.title === TEMP_TEST_TITLE && (
              <p sx={{ variant: "components.note.single.excerpt" }}>
                {TEMP_TEST_EXCERPT}
              </p>
            )}
            <Byline />
          </header>

          {TEMP_HAS_TOC.includes(frontMatter.title) && (
            <div sx={{ variant: "components.note.single.tocBlock" }}>
              <TOC />
            </div>
          )}

          <div
            sx={{ variant: "components.note.single.body" }}
            className={fallbackCss}
          >
            {hydrate(mdxContent, components)}
          </div>

          <div sx={{ variant: "components.note.single.metaBlock" }}>
            <Tags />
            <Share />
          </div>

          <div sx={{ variant: "components.note.single.bottomBlock" }}>
            <BackLinks />
            {/* add other stuff here (newsletter signup, webmentions) */}
          </div>

          <div sx={{ gridArea: "gside3" }}>
            {/* <Series /> */}
            <Related />
          </div>

          {/* yay, we're done! */}
        </article>
      </main>
      <Footer />
    </>
  );
}
