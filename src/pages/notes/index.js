/** @jsx jsx */
import { jsx } from "theme-ui";
// import Link from "next/link";
import { NoteSnippet } from "components";
import {
  getAllPosts,
  // getAllTags
} from "../../utils/get-mdx";

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("notes", "slug"),
      // allTags: getAllTags("posts"),
    },
  };
}

export default function Notes({ allMdx }) {
  return (
    <main>
      <h1 sx={{ color: "primary" }}>Notes</h1>
      <hr />
      <h2>Tags:</h2>
      <ul>
        <li sx={{ my: 2 }}>
          <strong>DevTips</strong>
          <div>web development and tooling tips</div>
        </li>
        <li sx={{ my: 2 }}>Learning Notes</li>
        <li sx={{ my: 2 }}>Media Notes</li>
        <li sx={{ my: 2 }}>Bookmarks</li>
      </ul>
      <hr />
      {allMdx && (
        <ul>
          {allMdx.map((item) => (
            <li key={item.slug} sx={{ my: 4 }}>
              <NoteSnippet {...item} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
