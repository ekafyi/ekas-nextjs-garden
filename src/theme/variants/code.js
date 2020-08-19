import nightOwl from "@theme-ui/prism/presets/night-owl.json";

const CODEBLOCK_P_X = 4;
const CODEBLOCK_RADIUS = 8;

export const blockCode = {
  container: {
    ...nightOwl,
    variant: "text.code",
    position: "relative",
    my: [6, 8],
    mx: [-2, null, 0],
    borderRadius: CODEBLOCK_RADIUS,
    ".token-line": { px: CODEBLOCK_P_X },
  },
  lang: {
    background: "yellow",
    color: "black",
    fontSize: "0.75rem",
    lineHeight: "body",
    textTransform: "uppercase",
    padding: "2px 4px",
    position: "absolute",
    top: `${CODEBLOCK_RADIUS}px`,
  },
  title: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    lineHeight: "pre",
    fontSize: 0,
    fontWeight: "bold",
    px: CODEBLOCK_P_X,
    borderTopLeftRadius: CODEBLOCK_RADIUS,
    borderTopRightRadius: CODEBLOCK_RADIUS,
    // "& + *": {},
  },
  highlight: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      height: "1.5rem", // lineHeight.pre
      backgroundColor: "hsla(0, 0%, 30%, .5)", // from https://github.com/system-ui/theme-ui/blob/master/packages/prism/presets/night-owl.json
    },
    ">*": {
      position: "relative",
    },
  },
};

const inlineCode = {
  variant: "text.code",
  lineHeight: 1, // Must be 1 so it does not affect surrounding paragraph.
  backgroundColor: "codeBg",
  color: "codeFg",
  px: 1,
  py: "2px",
  borderRadius: 4,
};

export const pre = {
  variant: "text.code",
  lineHeight: "pre",
  overflow: "auto",
  py: 5,
};

export default {
  fallback: {
    backgroundColor: nightOwl.backgroundColor,
    color: nightOwl.color,
  },
  block: blockCode,
  inline: inlineCode,
  pre,
};
