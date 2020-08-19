// Breakpoints are buggy here; don't use breakpoint-related styles.

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
  // check check 1-2-3.
  pinky: {
    fontWeight: "bold",
    color: "hotpink",
  },
};
