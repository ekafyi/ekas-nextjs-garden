import { getLhByFontIndex } from "../../utils/calc-type";

const MUTED_BG = { backgroundColor: "muted" };

// TODO clamp link item at 3 lines

export default {
  borderTop: "4px solid currentColor",
  borderBottom: "2px solid currentColor",
  backgroundColor: "background",
  lineHeight: "paragraph",
  mb: 8,
  ">button,a": {
    pr: [2], // heheheh
    pl: [2, null, null, 6],
  },
  ">button,.toc-panel": { py: 2 },
  "li li a": { pl: 8, fontSize: 0, lineHeight: "1rem" },
  "li li li a": { pl: 10 },
  ">button": {
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    lineHeight: getLhByFontIndex(3),
    "&:focus, &.is-open": MUTED_BG,
    "&::before": {
      content: '"▶"',
      fontSize: 0,
      mr: 3,
      ml: [null, null, null, -5],
      width: ".5rem",
      display: "inline-block",
    },
    "&.is-open::before": {
      content: '"▼"',
    },
  },
  a: { variant: "links.boxyInList", py: 1 },
  ".toc-panel": {
    maxHeight: "50vh",
    overflowY: "auto",
    borderTop: "2px solid currentColor",
  },
  ".show-on-hover": { display: "none" },
  "button:hover": {
    ".show-on-hover": { display: "inline" },
    ".hide-on-hover": { display: "none" },
  },
  ".ascii": {
    fontFamily: "monospace",
    fontSize: 0,
    whiteSpace: "nowrap",
    letterSpacing: "-0.075em",
  },
};
