const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
};

// Breakpoints are buggy here; don't use breakpoint-related styles.

export default {
  heading: {
    ...heading,
    a: { ...heading, color: "inherit" },
  },
  paragraph: {
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "paragraph",
  },
  code: {
    fontFamily: "monospace",
  },
  // check check 1-2-3.
  pinky: {
    fontWeight: "bold",
    color: "hotpink",
  },
};
