/** @jsx jsx */
import { jsx } from "theme-ui";
import { SEO, Nav, PostSnippet } from "components";
import Link from "next/link";

import { config } from "../../site.config.yml";
// import { talks } from "../../content/me/talks.yml"; // Don't remove, YAML data example.

export default function HomePage({ allMdx }) {
  return (
    <>
      <SEO />
      <main sx={{ p: 4 }}>
        <Nav showBc={false} />
        <h1
          sx={{
            variant: "text.entryHeading",
            // fontSize: [6, null, 8],
            mb: 8,
          }}
        >
          {config.siteName || ""}
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
