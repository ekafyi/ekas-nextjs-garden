import { getLhByFontIndex } from "../../utils/calc-type";

const blockquote = {
  mt: 8,
  pt: 2,
  pb: 3, // heheheheh
  pl: [4, null, 6],
  borderLeft: "1rem double",
  borderLeftColor: "text", // FF does not like currentColor for border.
  "&,p": {
    fontSize: [4],
    lineHeight: [getLhByFontIndex(4)],
  },
};

export const h2Sizes = [5, null, null, 6];
export const h2M = { "&:not(:first-child)": { mt: [9, null, 12] } };
export const h3Sizes = 4;
export const h3M = { "&:not(:first-child)": { mt: [7, null, 8] } };
export const h4Sizes = 3;
export const h4M = {
  "&:not(:first-child)": { mt: [6, null, 7] },
  // "+p,+ul,+ol": { mt: 3 }, // use for h5 maybe
};
export const h5Sizes = [2, null, null, 3];

const ANCHOR_ICON_MARGIN = -6;
export const hAnchorCommon = {
  a: { position: "relative" },
  "a:hover,a:focus": {
    svg: {
      visibility: "visible",
      height: "1em", // match heading size
      left: [null, null, ANCHOR_ICON_MARGIN],
      right: [ANCHOR_ICON_MARGIN, null, "unset"],
    },
  },
};

export const h2 = {
  variant: "text.heading",
  fontSize: h2Sizes,
  ...h2M,
  "&[id]": hAnchorCommon,
};

export const h3 = {
  variant: "text.heading",
  fontSize: h3Sizes,
  ...h3M,
  "&[id]": hAnchorCommon,
};

export const h4 = {
  variant: "text.heading",
  fontSize: h4Sizes,
  ...h4M,
  "&[id]": hAnchorCommon,
};

export const h5 = {
  variant: "text.heading",
  fontSize: h5Sizes,
};

// = = =

export default {
  heading: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    a: { color: "inherit" },
    "a:hover,a:focus,a:active": { textDecoration: "underline" },
  },
  paragraph: {
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "paragraph",
  },
  code: {
    fontFamily: "monospace",
    fontSize: 1,
  },
  subheading: { h2, h3, h4, h5 },
  blockquote,
  // Used on top-level page eg. "Notes" and "Posts"
  pageHeading: {
    variant: "text.heading",
    fontSize: [12, 14, 16, 19, 20],
    letterSpacing: "-0.0125em",
  },
  // Used on entry page, eg. a single note/post
  entryHeading: {
    variant: "text.heading",
    fontSize: [8, null, 10, 11, 12],
    letterSpacing: "-0.005em",
    lineHeight: [
      getLhByFontIndex(7),
      getLhByFontIndex(8),
      getLhByFontIndex(10),
      getLhByFontIndex(11),
      getLhByFontIndex(12),
    ],
  },
  // check check 1-2-3.
  pinky: {
    fontWeight: "bold",
    color: "hotpink",
  },
};
