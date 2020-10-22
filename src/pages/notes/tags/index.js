import Link from "next/link";
import { getAllTags } from "src/utils/get-mdx";
import { getTagFriendlyName } from "src/utils/get-taxonomy";

export async function getStaticProps() {
  return {
    props: {
      allTags: getAllTags("notes"),
    },
  };
}

export default function Tags({ allTags }) {
  return (
    <main>
      <h1 className="sr-only">Notes Tags</h1>
      {allTags && (
        <ul>
          {allTags.map((tag) => {
            const tagLabel = getTagFriendlyName(tag);
            return (
              <li key={tag} sx={{ ml: 2 }}>
                <Link
                  href="/notes/tags/[tag]"
                  as={`/notes/tags/${tagLabel}`}
                  passHref
                >
                  <a>{tagLabel}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
