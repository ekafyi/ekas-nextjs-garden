/** @jsx jsx */
import { jsx } from "theme-ui";
import { SEO, PostSnippet, GitHub, ColorModeSelect } from "components";

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

        <ul>
          <li>
            Create top level routes from .mdx files organized however you want.
          </li>
          <li>Statically generated routes using Next’s `getStaticPaths`.</li>
          <li>Supports frontmatter (thanks to gray-matter).</li>
        </ul>

        <a
          href={githubUrl}
          sx={{
            mt: 4,
            variant: "buttons.withIcon",
          }}
        >
          <GitHub />
          <span>View source on GitHub</span>
        </a>

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
