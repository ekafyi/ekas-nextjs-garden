/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { SEO, SkipLink, Nav, Layout } from "components";
import { getAllTags } from "src/utils/get-mdx";
import { getTagFriendlyName } from "src/utils/get-taxonomy";

const TAGLIST_SX = { display: "flex", flexWrap: "wrap" };

const TAG_SX = { variant: "buttons.pill", fontSize: 4, mr: 3, mb: 2 };

const H_SX = { variant: "text.pageHeading", my: [8, null, 12] };

export async function getStaticProps() {
  return {
    props: {
      allTags: getAllTags("notes"),
    },
  };
}

export default function Tags({ allTags }) {
  const router = useRouter();
  return (
    <>
      <SEO title="Tags Archive" path={router.asPath} />
      <SkipLink />
      <Layout>
        <Nav curPath={router.asPath} />
        <h1 sx={H_SX}>Tags</h1>
        {allTags && (
          <ul id="main" sx={TAGLIST_SX}>
            {allTags.map((tag) => {
              const tagLabel = getTagFriendlyName(tag);
              return (
                <li key={tag}>
                  <Link
                    href="/notes/tags/[tag]"
                    as={`/notes/tags/${tagLabel}`}
                    passHref
                  >
                    <a sx={TAG_SX}>{tagLabel}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Layout>
    </>
  );
}
