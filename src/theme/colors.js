//  "#64C7FF" // i like this color, not sure where to use

const light = {
  background: "hsl(60, 100%, 88%)", // #ffffc3
  text: "hsl(236, 76%, 35%)", // #16209f

  // Accent colour that's closer to "text" (must pass WCAG contrast check)
  primary: "hsl(0, 78%, 46%)", // #d01a1a

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
  text: "hsl(48, 100%, 87%)", // #fff2bf
  background: "hsl(225, 40%, 16%)", // #182038
  primary: "hsl(25, 100%, 55%)", // #FF7717
  mutedFg: "hsla(48, 80%, 77%, 80%)",
  muted: "hsl(225, 30%, 26%)",
  codeBg: "hsl(208, 90%, 8%)",
  codeFg: "hsl(221, 100%, 75%)",
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
