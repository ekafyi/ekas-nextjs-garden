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
import GardenStatus from "./Note/GardenStatus";

import dynamic from "next/dynamic";
import mdxComponents from "components/mdx";
import { getNotePageDesc } from "../utils/get-seo-copy";

const CodeBlock = dynamic(() => import("./mdx/CodeBlock")); // It's somehow faster when imported here vs from components/mdx 🤔.
const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,
  ...mdxComponents,
};

const fallbackCss = "leading-6 md:leading-7";

export default function NotePage({ mdxContent, frontMatter, toc }) {
  const router = useRouter();

  if (!frontMatter || !mdxContent) {
    return <ErrorPage statusCode={404} />;
  }

  const description = getNotePageDesc(frontMatter.excerpt, frontMatter.tags);

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
            <p sx={{ variant: "components.note.excerpt" }}>
              {frontMatter.excerpt || null}
            </p>
            <Byline
              publishDate={frontMatter.date}
              updateDate={frontMatter.updated}
            />
          </header>

          <div sx={{ gridArea: "gside2" }}>
            <GardenStatus
              status={frontMatter.status || "GARDEN_FINAL"}
              date={frontMatter.updated || frontMatter.date}
            />
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
            {hydrate(mdxContent, { components })}
          </div>

          <div sx={{ variant: "components.note.metaBlock" }}>
            <Tags tags={frontMatter.tags} techs={frontMatter.techs} />
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
