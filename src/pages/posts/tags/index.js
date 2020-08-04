import Link from "next/link";

import { getAllTags } from "../../../utils/get-mdx";

export async function getStaticProps() {
  return {
    props: {
      allTags: getAllTags("posts"),
    },
  };
}

export default function Tags({ allTags }) {
  return (
    <main>
      <h1>Post Tags Archive</h1>
      {allTags && (
        <ul>
          {allTags.map((tag) => (
            <li key={tag} sx={{ ml: 2 }}>
              <Link href="/posts/tags/[tag]" as={`/posts/tags/${tag}`} passHref>
                <a>{`#${tag}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
