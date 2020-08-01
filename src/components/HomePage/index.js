// import Link from "next/link";
import { SEO, PostSnippet, GitHub } from "components";

const githubUrl =
  "https://github.com/RyanWarner/next-mdx-digital-garden-starter";

export default function HomePage({ allMdx }) {
  return (
    <>
      <SEO />
      <main>
        <span>🌱</span>
        <h1>
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

        <a href={githubUrl}>
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
