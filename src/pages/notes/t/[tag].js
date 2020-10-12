/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { SEO, SkipLink, Nav, NoteSnippet } from "components";
import { getAllTagsStaticPaths, getPostsByTag } from "src/utils/get-mdx";
import { getTagRealName } from "src/utils/note-utils";
import { tags as tagsConfig } from "taxonomies.yml";

export async function getStaticPaths() {
  const paths = getAllTagsStaticPaths("notes");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tag } }) {
  return {
    props: {
      tag,
      allPosts: getPostsByTag(getTagRealName(tag, tagsConfig), "notes", "tag"),
    },
  };
}

export default function Tag({ tag, allPosts }) {
  const router = useRouter();
  return (
    <>
      <SEO
        title={`#${tag} | Notes`}
        // description={description} // TODO [low priority] add custom description
        path={router.asPath}
      />
      <SkipLink href="#posts">Skip to posts</SkipLink>
      <main sx={{ variant: "layout.container" }}>
        <Nav curPath={router.asPath} />
        <div id="main" sx={{ variant: "components.notes.container" }}>
          <header sx={{ variant: "components.notes.header" }}>
            <h1 sx={{ variant: "text.pageHeading" }}>Notes</h1>
            <p
              sx={{
                variant: "components.notes.subheader",
                fontSize: [6, null, 8],
              }}
            >
              tagged <strong>#{tag}</strong>
            </p>
          </header>
          <div sx={{ variant: "components.notes.side" }}>asdasdas</div>
          <div id="posts" sx={{ variant: "components.notes.entries" }}>
            {allPosts?.map((item) => (
              <NoteSnippet key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
