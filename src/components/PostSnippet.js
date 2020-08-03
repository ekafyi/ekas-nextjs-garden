/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from 'next/link'

export default function PostSnippet ({ slug, dynHref, frontMatter }) {
  return (
    <>
      <Link href={dynHref} as={slug} prefetch={false} passHref>
        <a sx={{ variant: "links.snippet" }}>{frontMatter.title}</a>
      </Link>
      <div
        sx={{
          mt: 2,
          variant: "text.date.snippet",
        }}
      >
        {frontMatter.date}
      </div>
    </>
  );
}