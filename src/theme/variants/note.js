import { getLhByFontIndex } from "../../utils/calc-type";

// Why? https://css-tricks.com/equal-width-columns-in-css-grid-are-kinda-weird/
const getGridCol = (col) => {
  return `repeat(${col}, minmax(0, 1fr))`;
};

const getGridColsArr = (colsArr = []) => {
  return colsArr.map((col) => {
    return col ? getGridCol(col) : null;
  });
};

const gridColumnGap = "calc(1rem + 2vw)";
const gridRowGap = [4];

const grid12 = {
  display: "grid",
  gridColumnGap,
  gridRowGap,
  gridTemplateColumns: getGridColsArr([null, 12]),
};

const snippetLink = {
  display: "block",
  pt: 2,
  pb: [2, 0],
  px: 1,
  borderTop: ".125rem solid currentColor",
  borderBottom: ".375rem solid transparent",
  transition: "border .2s",
  "&:hover,&:focus": {
    color: "primary",
    borderTopWidth: ".375rem",
    borderBottomWidth: ".125rem",
  },
};

// = = =

export default {
  single: {
    title: {
      variant: "text.heading",
      // Sizes & top margin done!
      mt: [6, null, 9, null, 12],
      mb: [8, null, 12], // sementara
      fontSize: [8, 9, 10],
      lineHeight: [
        getLhByFontIndex(7),
        getLhByFontIndex(8),
        getLhByFontIndex(9),
        getLhByFontIndex(10),
      ],
      // background: ["tomato", "purple", "aliceblue", "greenyellow", "hotpink"],
    },
    body: {
      // variant: "layout.singleContent",
      // background: "aliceblue",
      // display: "none",
    },
  },
  //
  index: {
    container: {
      ...grid12,
      mx: "auto",
      maxWidth: "105rem",
      gridTemplateRows: [
        "8rem auto",
        "10rem auto",
        "13rem auto",
        "16rem auto",
        "17rem auto",
      ], // set header row height manually
    },
    header: {
      gridColumn: ["-1 / 1", null, null, "-1 / 4", "-1 / 3"],
      display: "grid",
      gridGap: "0 calc(1rem + 2vw)",
      gridTemplateRows: [
        "repeat(8, 1rem)",
        "repeat(10, 1rem)",
        "repeat(9, 2rem)",
      ], // match container.gridTemplateRows
      h1: {
        pt: [2, 6, 5, 6, 7],
        gridRow: ["span 4", "span 6", "span 3", "span 4", "span 5"],
      },
    },
    subheader: {
      fontSize: [1, 2, 4],
      lineHeight: ["paragraph", getLhByFontIndex(3), getLhByFontIndex(4)],
      color: "muted",
      maxWidth: [null, null, "27em", null, "36vw"],
      pt: [1, 0, 4, 8, 4],
    },
    side: {
      gridColumn: ["1 / -1", null, "span 3", null, "span 2"],
      backgroundColor: "background",
      position: ["sticky"],
      top: [0, null, 4],
      zIndex: 1,
      maxWidth: [null, null, "14rem"],
      maxHeight: "100vh", // Height must be set so position:sticky works.
      mt: [-2, null, 0], // These are for sticky top on small screens.
      pt: [2, null, 0], // These are for sticky top on small screens.
      mb: [null, 2],
      lineHeight: "1rem",
    },
    tag: {
      variant: "buttons.pill",
    },
    entries: {
      // background: [null, "aliceblue", "greenyellow", "salmon", "transparent"], // check
      gridColumn: ["1 / -1", null, "-1 / 4", null, "-1 / 3"],
      display: "grid",
      gridColumnGap,
      gridRowGap,
      gridTemplateColumns: [
        null,
        "repeat(auto-fill, minmax(13rem, 1fr))",
        getGridCol(2),
        getGridCol(3),
        getGridCol(5),
      ],
      gridAutoRows: ["minmax(4rem, auto)", "5rem", null, "6rem"],
      lineHeight: getLhByFontIndex(2),
    },
    snippet: {
      position: "relative",
      fontWeight: "medium",
      a: {
        variant: "links.coverParent",
        ...snippetLink,

        // TODO separate clamp as helper/reusable theme function
        // Clamp at 3 lines to fit gridAutoRows
        display: ["block", "-webkit-box"],
        overflow: [null, "hidden"],
        // "-webkit-line-clamp": "4",
        WebkitLineClamp: "4",
        // "-webkit-box-orient": "vertical",
        WebkitBoxOrient: "vertical",
      },
    },
  },
};
