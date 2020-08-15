//  "#64C7FF" // i like this color, not sure where to use

const light = {
  background: "#ffffc3",
  text: "#16209f",

  // Accent colour that's closer to "text" (must pass WCAG contrast check)
  primary: "#e64a19",
  // primary: "#80d8ff",
  // primary: "#6ccfff",
  // primary: "#006cde",

  // Slightly weaker than "text"
  muted: "hsla(236, 76%, 35%, 75%)",

  // Slightly stronger than "background"
  border: "hsl(54, 57%, 81%)",
};

const dark = {
  text: "#f8f1d7",
  background: "hsl(233, 25%, 15%)",
  primary: "#64C7FF",
  muted: "hsla(45, 70%, 90%, 80%)",
  border: "hsl(233, 15%, 25%)",
};

const colors = {
  ...light,
  modes: {
    dark,
  },
};

export default colors;
