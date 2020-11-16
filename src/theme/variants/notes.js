import { getLhByFontIndex } from "../../utils/calc-type";

// Why? https://css-tricks.com/equal-width-columns-in-css-grid-are-kinda-weird/
const getGridCol = (col) => {
  return `repeat(${col}, minmax(0, 1fr))`;
};

// Define here for quicker changes.
const outerCols = [null, 12, null, 16, 12];
const entryGridHeight = ["minmax(7rem, auto)", null, "9rem"];
const headerHeight = ["9rem", null, "12.5rem", "16rem", "17rem"];
const titleSpacing = {
  pt: [2, null, 4, null, 5],
  mb: [null, null, -3, -6, -7],
};
const subtitleSpacing = {}; // set margins from titleSpacing; leave here in case of future design changes.

// Used in container and entries to keep gap consistent.
const gridColumnGap = "calc(1rem + 2vw)";
const gridRowGap = [4];

const snippetLink = {
  display: "block",
  pt: 3,
  px: 1,
  borderTop: ".25rem solid currentColor",
  transition: "all .15s ease-in-out",
  "&:hover,&:focus": {
    color: "primary",
    pt: 2,
    borderTopWidth: ".5rem",
  },
};

const stickyStuff = {
  position: [null, null, null, "sticky"],
  top: [null, null, null, 4],
  zIndex: 1,
  maxHeight: [null, null, null, "100vh"], // Height must be set so position:sticky works.
};

// = = =

export default {
  container: {
    display: "grid",
    gridColumnGap,
    gridRowGap,
    gridTemplateColumns: outerCols.map((col) => (col ? getGridCol(col) : null)),
    mx: "auto",
    maxWidth: "105rem",
    gridTemplateRows: headerHeight.map((item) =>
      item ? `${item} auto` : null
    ),
  },
  header: {
    gridColumn: ["-1 / 1", null, null, "-1 / 4", "-1 / 3"],
    display: "grid",
    gridGap: `0 ${gridColumnGap}`,
    h1: titleSpacing,
  },
  subheader: {
    ...subtitleSpacing,
    fontSize: [1, 2, 4],
    lineHeight: ["paragraph", getLhByFontIndex(3), getLhByFontIndex(4)],
    maxWidth: [null, null, "30em", null, "45vw"],
    letterSpacing: "-0.005em",
  },
  side: {
    ...stickyStuff,
    gridColumn: ["1 / -1", null, null, "span 3", "span 2"],
    maxWidth: [null, null, null, "14rem"],
    mb: [4, null, 7],
    lineHeight: "1rem",
  },
  entries: {
    // background: [null, "aliceblue", "greenyellow", "salmon", "transparent"], // check
    gridColumn: ["1 / -1", null, null, "-1 / 4", "-1 / 3"],
    display: "grid",
    gridColumnGap,
    gridRowGap,
    gridTemplateColumns: [
      null,
      "repeat(auto-fill, minmax(13rem, 1fr))",
      getGridCol(3),
      getGridCol(4),
      getGridCol(5),
    ],
    gridAutoRows: entryGridHeight,
    lineHeight: getLhByFontIndex(3),
    justifyContent: ["center", "unset"],
  },
  snippet: {
    position: "relative",
    fontWeight: "medium",
    width: ["17rem", "auto"],
    a: {
      variant: "links.coverParent",
      ...snippetLink,
      // Clamp at 4 lines to fit gridAutoRows
      display: ["block", "-webkit-box"],
      overflow: [null, "hidden"],
      WebkitLineClamp: "4",
      WebkitBoxOrient: "vertical",
    },
  },
  sideMeta: {
    fontSize: 1,
    lineHeight: "paragraph",
    mt: [-4, null, null, 0],
    mb: 2,
    p: { mb: 4 },
  },
};
