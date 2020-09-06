//  "#64C7FF" // i like this color, not sure where to use

const light = {
  background: "#ffffc3",
  text: "#16209f",

  // Accent colour that's closer to "text" (must pass WCAG contrast check)
  primary: "#d01a1a",

  // Slightly weaker than "text"
  mutedFg: "hsla(236, 76%, 42%, 75%)",

  // Slightly stronger than "background"
  muted: "hsl(54, 57%, 81%)",

  // Others
  codeBg: "hsla(210, 94%, 88%, 50%)",
  codeFg: "#ad006f",
  childListBullet: "#0066ff",
  temp_postStatus: "#e6ff98", // green
};

const dark = {
  text: "#f8f1d7",
  background: "hsl(233, 25%, 15%)",
  primary: "#64C7FF",
  mutedFg: "hsla(45, 70%, 90%, 80%)",
  muted: "hsl(233, 15%, 20%)",
  codeBg: "hsl(0, 0%, 22%)",
  codeFg: "hsl(84, 62%, 63%)",
  childListBullet: "red",
  temp_postStatus: "#153316",
};

const colors = {
  ...light,
  modes: {
    dark,
  },
};

export default colors;
