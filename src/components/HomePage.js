/** @jsx jsx */
import { jsx } from "theme-ui";
import { SEO, PostSnippet, GitHub, ColorModeSelect } from "components";
import Link from "next/link";

const githubUrl =
  "https://github.com/RyanWarner/next-mdx-digital-garden-starter";

export default function HomePage({ allMdx }) {
  return (
    <>
      <SEO />
      <ColorModeSelect />
      <main>
        <div sx={{ backgroundColor: "primary", color: "#fff", p: 4 }}>
          🍅 tomato
        </div>
        <h1 className="text-green-700 text-4xl">
          NextJS + MDX
          <br />
          Digital Garden Starter
        </h1>
        <Link href="/posts" passHref>
          <a>posts</a>
        </Link>
        &nbsp;
        <Link href="/notes" passHref>
          <a>notes</a>
        </Link>
        <hr sx={{ my: 4 }} />
        <h2>Example posts</h2>
        <ul>
          {allMdx.map((item) => (
            <li key={item.slug}>
              <PostSnippet {...item} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
