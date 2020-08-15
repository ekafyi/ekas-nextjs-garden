// import reusable from "./variants/reusable";

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
    fontSize: [10, null, 12, null, 14],
  },
  h3: {
    variant: "text.heading",
    fontSize: [8, 10, 12, 14, 16],
  },
  h4: {
    variant: "text.heading",
    fontSize: [6, 8, 10, 12, 14],
  },
  h5: {
    variant: "text.heading",
    fontSize: 2,
  },
  h6: {
    variant: "text.heading",
    fontSize: 1,
  },
  p: {
    variant: "text.paragraph",
    fontSize: 2,
  },
  a: {
    color: "currentColor",
    textDecoration: "underline",
    "&:hover, &:focus": {
      color: "primary",
    },
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  pre: {
    variant: "text.code",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    variant: "text.code",
    fontSize: "inherit",
  },
  inlineCode: {
    variant: "text.code",
  },
  ol: {},
  ul: {},
  li: {},
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
