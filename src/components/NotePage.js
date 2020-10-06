/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";
import hydrate from "next-mdx-remote/hydrate";
import { SEO, SkipLink, Nav, ErrorPage, Footer } from "components";

import TOC from "./NoteTemp/TOC";
import Tags from "./NoteTemp/Tags";
import Byline from "./NoteTemp/Byline";
import Share from "./NoteTemp/Share";
import Related from "./NoteTemp/Related";
import BackLinks from "./NoteTemp/BackLinks";
import StatusOrWhatever from "./NoteTemp/StatusOrWhatever";

import dynamic from "next/dynamic";
import mdxComponents from "components/mdx";
import { getNoteDesc } from "../utils/note-utils";

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

export default function NotePage({ mdxContent, frontMatter, toc }) {
  const router = useRouter();

  if (!frontMatter || !mdxContent) {
    return <ErrorPage statusCode={404} />;
  }

  const description = getNoteDesc(
    frontMatter.excerpt || null,
    frontMatter.tags,
    frontMatter.tech
  );

  return (
    <>
      <SEO
        title={frontMatter.title}
        description={description}
        path={router.asPath}
      />
      <SkipLink />
      <main sx={{ variant: "layout.container" }}>
        <Nav curPath={router.asPath} />

        <article id="main" sx={{ variant: "components.note.container" }}>
          <header sx={{ variant: "components.note.header" }}>
            <Styled.h1 sx={{ variant: "components.note.title" }}>
              {frontMatter.title}
            </Styled.h1>
            {frontMatter.title === TEMP_TEST_TITLE && (
              <p sx={{ variant: "components.note.excerpt" }}>
                {TEMP_TEST_EXCERPT}
              </p>
            )}
            <Byline
              publishDate={frontMatter.date}
              updateDate={frontMatter.updated}
            />
          </header>

          <div sx={{ gridArea: "gside2" }}>
            <StatusOrWhatever />
          </div>

          {toc && (
            <div sx={{ gridArea: "gside3" }}>
              <TOC
                content={toc}
                sx={{
                  position: [null, null, null, "sticky"],
                  top: [null, null, null, "1rem"],
                }}
              />
            </div>
          )}

          <div sx={{ variant: "components.note.body" }} className={fallbackCss}>
            {hydrate(mdxContent, components)}
          </div>

          <div sx={{ variant: "components.note.metaBlock" }}>
            <Tags tags={frontMatter.tags} tech={frontMatter.tech} />
            <Share
              title={frontMatter.title}
              description={description}
              path={router.asPath}
            />
          </div>

          <div sx={{ variant: "components.note.bottomBlock" }}>
            <BackLinks />
            {/* add other stuff here (newsletter signup, webmentions) */}
          </div>

          <div sx={{ gridArea: "gside4" }}>
            <Related />
          </div>

          {/* yay, we're done! */}
        </article>
      </main>
      <Footer />
    </>
  );
}
