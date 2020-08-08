/** @jsx jsx */
import { jsx } from "theme-ui";
import { SEO, PostSnippet, ColorModeSelect } from "components";
import Link from "next/link";

import { config } from "../../site.config.yml";

export default function HomePage({ allMdx }) {
  return (
    <>
      <SEO />
      <ColorModeSelect />
      <main>
        <h1 className="text-green-700 text-4xl">
          NextJS + MDX
          <br />
          Digital Garden Starter
        </h1>
        <ul>
          {config.navigation.map((nav) => {
            return (
              <li key={nav.text}>
                <Link href={nav.link} passHref>
                  <a>{nav.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
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
