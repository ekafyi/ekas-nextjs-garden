/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default function NoteSnippet({ slug, dynHref, frontMatter }) {
  return (
    <article sx={{ variant: "components.notes.snippet" }}>
      <Link href={dynHref} as={slug} prefetch={false} passHref>
        <a>
          <h2>{frontMatter.title}</h2>
        </a>
      </Link>
    </article>
  );
}
