//  "#64C7FF" // i like this color, not sure where to use

const light = {
  background: "#ffffc3",
  text: "#16209f",

  // Accent colour that's closer to "text" (must pass WCAG contrast check)
  primary: "#e64a19",

  // Slightly weaker than "text"
  muted: "hsla(236, 76%, 35%, 75%)",

  // Slightly stronger than "background"
  border: "hsl(54, 57%, 81%)",

  // Others
  codeBg: "hsla(210, 94%, 88%, 50%)",
  codeFg: "#ad006f",
};

const dark = {
  text: "#f8f1d7",
  background: "hsl(233, 25%, 15%)",
  primary: "#64C7FF",
  muted: "hsla(45, 70%, 90%, 80%)",
  border: "hsl(233, 15%, 25%)",
  codeBg: "hsl(0, 0%, 22%)",
  codeFg: "#1cff1c",
};

const colors = {
  ...light,
  modes: {
    dark,
  },
};

export default colors;
