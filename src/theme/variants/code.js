import nightOwl from "@theme-ui/prism/presets/night-owl.json";
// https://github.com/system-ui/theme-ui/blob/master/packages/prism/presets/night-owl.json

const CODEBLOCK_P_X = 4;

export const pre = {
  variant: "text.code",
  lineHeight: "pre",
  overflow: "auto",
  py: 5,
};

const cBlockLang = {
  background: "yellow",
  color: "black",
  fontSize: "0.75rem",
  lineHeight: "body",
  textTransform: "uppercase",
  padding: "2px 4px",
  position: "absolute",
  top: "4px",
};

const cBlockTitle = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  lineHeight: "pre",
  fontSize: 0,
  fontWeight: "bold",
  px: CODEBLOCK_P_X,
  // borderTopLeftRadius: CODEBLOCK_RADIUS,
  // borderTopRightRadius: CODEBLOCK_RADIUS,
  // "& + *": {},
};

const cBlockHl = {
  "&::before": {
    content: '"👉🏼"',
    position: "absolute",
    left: 0,
    right: 0,
    height: "1.5rem", // lineHeight.pre
    backgroundColor: "hsla(0, 0%, 30%, .5)", // from https://github.com/system-ui/theme-ui/blob/master/packages/prism/presets/night-owl.json
  },
  ">*": { position: "relative" },
};

// nggak dipake sih~
export const blockCode = {
  container: {
    pre,
    ...nightOwl,
    variant: "text.code",
    position: "relative",
    mt: [8, null, 10],
    mb: [8, null, 10],
    mx: [-2, null, 0],
    // borderRadius: CODEBLOCK_RADIUS,
    ".token-line": { px: CODEBLOCK_P_X },
    ".eka-cblock__lang": cBlockLang,
    ".eka-cblock__title": cBlockTitle,
  },
  // lang: cBlockLang,
  // title: cBlockTitle,
  // hl: cBlockHl,
  maxWidth: "50%", // tes tes
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

const lang = {
  textTransform: "uppercase",
  fontWeight: "medium",
  height: "1.25rem",
  lineHeight: "1.25rem",
  fontSize: "0.7rem",
};

const bgFgColors = {
  backgroundColor: nightOwl.backgroundColor,
  color: nightOwl.color,
};

// = = =

// TODO [low priority] move ripple to separate reusable component/variant
const ripple = {
  backgroundPosition: "center",
  transition: "background 0.75s",
  "&:hover": {
    background: `radial-gradient(circle, transparent 1%, ${nightOwl.backgroundColor} 1%) center/15000%`, // prettier-ignore
    backgroundColor: nightOwl.backgroundColor,
  },
  "&:active": {
    backgroundSize: "100%",
    transition: "background 0s",
    backgroundColor: nightOwl[".builtin,.char,.constant,.function"]["color"],
  },
};

// = = =

export default {
  pre,
  block: blockCode, // coba gak pake
  inline: inlineCode,
  //
  prismHl: cBlockHl,
  prismHeader: {
    ...bgFgColors,
    fontSize: 0,
    ">div:first-child": { alignItems: "center" },
    ">div>div[class]": lang,
    button: { fontWeight: "bold", ...ripple },
    borderBottom: "1px solid",
    borderBottomColor: nightOwl[".comment"]["color"],
    position: "relative",
    zIndex: 1,
    mb: -1,
  },

  // Called from eg. variants.mdx to prevent FOUC.
  fallback: {
    ...bgFgColors,
    my: [6, 8],
  },
  //
};
