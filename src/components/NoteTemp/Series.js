/** @jsx jsx */
import { jsx } from "theme-ui";

const EX_SERIES_GQL_TITLE = "GraphQL Adventure Club 2020";
const EX_SERIES_JUNGLE_TITLE = "JungleJS Svelte SSG meta-framework";

const EX_SERIES_GQL = [
  "1) GraphQL Adventure Club at the Party-Corgi Discord",
  "2) GraphQL Adventure Club Week 1: GraphQL Fundamentals",
  "3) GraphQL Adventure Club Advanced GraphQL Notes",
  "4) GraphQL Adventure Club Week 2: React + Apollo Tutorial",
];
const EX_SERIES_JUNGLE = [
  "1) JungleJS + Storybook + TailwindCSS starter",
  "2) Get asynchronous data in JungleJS, the new Svelte JAMstack library",
  "3) Go serverless with this JungleJS + Netlify functions starter site",
];

export default function Series() {
  return (
    <nav sx={{ variant: "components.note.series" }}>
      <header>
        <h2 className="h">{EX_SERIES_GQL_TITLE}</h2>
        <div className="sub">
          post <strong>2</strong> of <strong>4</strong> in the series
        </div>
      </header>
      <ul className="b">
        {EX_SERIES_GQL.map((link, i) => (
          <li>
            <a className={i === 1 ? "is-active" : ""} href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
