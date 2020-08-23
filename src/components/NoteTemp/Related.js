/** @jsx jsx */
import { jsx } from "theme-ui";

const EX_TOPIC = "github";

const EX_SERIES_GQL = [
  "GraphQL Adventure Club at the Party-Corgi Discord",
  "GraphQL Adventure Club Week 1: GraphQL Fundamentals",
  "GraphQL Adventure Club Advanced GraphQL Notes",
  "GraphQL Adventure Club Week 2: React + Apollo Tutorial",
];
const EX_SERIES_JUNGLE = [
  "JungleJS + Storybook + TailwindCSS starter",
  "Get asynchronous data in JungleJS, the new Svelte JAMstack library",
  "Go serverless with this JungleJS + Netlify functions starter site",
];

export default function Related() {
  return (
    <nav
      sx={{
        variant: "components.note.single.series",
        ".h": { fontWeight: "body" },
      }}
      aria-label={`Other entries tagged ${EX_TOPIC}`}
    >
      <header aria-hidden="true">
        <span className="h">
          more in <strong>{EX_TOPIC}</strong>
        </span>
      </header>
      <ul className="b">
        {EX_SERIES_GQL.map((link, i) => (
          <li>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
