/** @jsx jsx */
import { jsx } from "theme-ui";

import * as icons from "components/icons";

const Emoji = ({ label, children }) => (
  <span aria-label={label} role="img">
    {children}
  </span>
);

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <div
      sx={{
        display: "none", // TODO redesign ugly footer
        px: 4,
        py: [8, null, null, 4],
        fontSize: 0,
        lineHeight: "paragraph",
        display: [null, null, null, "flex"],
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          order: "2",
          mb: [8, null, null, 0],
          mr: [null, null, null, -2],
          a: {
            display: "inline-block",
            p: 1,
            mx: 1,
            "&:hover,&:focus": { color: "primary" },
          },
          svg: {
            width: "1.5rem",
            height: "1.5rem",
          },
        }}
      >
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on Github"
        >
          <icons.Gh />
        </a>
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on Github"
        >
          <icons.Gh />
        </a>
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on Github"
        >
          <icons.Gh />
        </a>
      </div>
      <div
        sx={{
          textAlign: ["center", null, null, "left"],
          a: {
            fontWeight: "medium",
            borderBottom: "1px solid currentColor",
            "&:hover, &:focus": { color: "primary" },
          },
          "span[role]": {
            display: "inline-block",
            width: "1.25em",
            mr: ".125em",
          },
        }}
      >
        <span>&copy; {y} &ndash; end of time. </span>
        <span>
          Made by <a href="#">Eka</a> with <Emoji label="coffee">☕️</Emoji>,{" "}
          <Emoji label="headphones">🎧</Emoji>, and <a href="#">magic</a> (not).{" "}
          See license and site information <a href="#">here.</a>
        </span>
      </div>
    </div>
  );
}
