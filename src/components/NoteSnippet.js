/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default function NoteSnippet({ slug, dynHref, frontMatter }) {
  return (
    <>
      <Link href={dynHref} as={slug} prefetch={false} passHref>
        <a sx={{ color: "text", fontSize: 3 }}>{frontMatter.title}</a>
      </Link>
    </>
  );
}
