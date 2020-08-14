/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

// Pass variant as props while experimenting with layout.
// When I've decided on the layout, pass it from here: <article sx={{ variant: "components.note.snippet" }}>
export default function NoteSnippet({ slug, dynHref, frontMatter, variant }) {
  return (
    <article sx={{ variant }}>
      <Link href={dynHref} as={slug} prefetch={false} passHref>
        <a>
          <h2>{frontMatter.title}</h2>
        </a>
      </Link>
    </article>
  );
}
