/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default function PostSnippet({ slug, dynHref, frontMatter }) {
  return (
    <>
      <Link href={dynHref} as={slug} prefetch={false} passHref>
        <a sx={{ variant: "links.snippet" }}>{frontMatter.title}</a>
      </Link>
      <div
        sx={{
          mt: 2,
          display: "flex",
          variant: "text.date.snippet",
        }}
      >
        <span>{frontMatter.date}</span>
        {frontMatter.tags && (
          <ul sx={{ display: "inline-flex" }}>
            {frontMatter.tags.map((tag) => (
              <li key={tag} sx={{ ml: 2 }}>
                <Link
                  href="/posts/tags/[tag]"
                  as={`/posts/tags/${tag}`}
                  passHref
                >
                  <a>{`#${tag}`}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
