// import nightOwl from "@theme-ui/prism/presets/night-owl.json";
import { getLhByFontIndex, convertToRem } from "../utils/calc-type";
// import reusable from "./variants/reusable";

const UL_MARGIN = 24;
const OL_MARGIN = 32;
const OL_NUMBER_SIZE = 18;

const blockContentCommon = {
  fontSize: [2, 3],
  lineHeight: [getLhByFontIndex(3), getLhByFontIndex(3)], // Repeat so it does not get overridden.
  "& + p, & + ul, & + ol": { mt: [4] },
};

export default {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    svg: { fill: "currentColor" },
  },
  h1: {
    variant: "text.heading",
    fontSize: [12, 14, 16, 19, 20],
    lineHeight: 1,
    letterSpacing: "-0.0125em",
  },
  h2: {
    variant: "text.heading",
    // fontSize: [10, null, 12, null, 14],
  },
  h3: {
    variant: "text.heading",
    // fontSize: [8, 10, 12, 14, 16],
  },
  h4: {
    variant: "text.heading",
    // fontSize: [6, 8, 10, 12, 14],
  },
  h5: {
    variant: "text.heading",
    // fontSize: 2,
  },
  h6: {
    variant: "text.heading",
    // fontSize: 1,
  },
  p: {
    ...blockContentCommon,
    variant: "text.paragraph",
  },
  a: {
    color: "primary",
    borderBottom: "2px solid currentColor",
    fontWeight: "medium",
    "&:hover, &:focus": {
      borderBottomColor: "text",
    },
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  pre: {
    my: [6, 8],
    pt: 5,
    pb: 4, // heheheheh
    px: 3,
    lineHeight: "pre",
    fontSize: 1,
    borderRadius: 4,
    variant: "text.code",
    // code: { color: "inherit" },
  },
  code: {
    variant: "text.code",
    // ...nightOwl, // from @theme-ui/prism
    hl: {
      background: "rgba(255,255,255,0.15)",
    },
  },
  inlineCode: {
    variant: "text.code",
    fontSize: 1,
    lineHeight: 1, // Must be 1 so it does not affect surrounding paragraph.
    backgroundColor: "codeBg",
    color: "codeFg",
    px: 1,
    py: "2px",
    borderRadius: 4,
  },
  ol: {
    ...blockContentCommon,
    counterReset: "steps",
    li: {
      counterIncrement: "steps",
      ml: convertToRem(OL_MARGIN),
    },
    "li::before": {
      content: 'counter(steps)', // prettier-ignore
      display: "inline-block",
      width: convertToRem(OL_NUMBER_SIZE),
      height: convertToRem(OL_NUMBER_SIZE),
      lineHeight: convertToRem(OL_NUMBER_SIZE),
      borderRadius: "50%",
      textAlign: "center",
      fontSize: 0,
      fontWeight: "bold",
      color: "background",
      backgroundColor: "primary",
      ml: convertToRem(OL_MARGIN * -1),
      mr: convertToRem(OL_MARGIN - OL_NUMBER_SIZE),
    },
  },
  ul: {
    ...blockContentCommon,
    li: {
      ml: convertToRem(UL_MARGIN),
    },
    "li::before": {
      content: '"\\2022"',
      display: "inline-block",
      color: "primary",
      width: convertToRem(UL_MARGIN),
      ml: convertToRem(UL_MARGIN * -1),
      pl: 1,
    },
  },
  li: {
    "&:not(:last-child)": { mb: 2 },
  },
  blockquote: {},
  hr: {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "muted",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
};

// ? [low priority] add font-size: calc(1rem + 0.125vw) in html (root) for fluid typography?
// https://css-tricks.com/simplified-fluid-typography/
