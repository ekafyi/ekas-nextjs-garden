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
const basicSingleGrid = {
  mx: ["auto"],
  maxWidth: ["42rem", null, null, "100%"],
  display: [null, null, null, "grid"],
};

const side992 = "minmax(11rem,16.67vw)";
const grid992 = `${side992} 1fr ${side992}`;
const gap992 = "calc(1.5rem + 3vw)";
const area992 =
  '". gtitle ." "gside1 gbody gside3" "gside2 gbody gside3" ". gbottom ."';

const side1280 = "minmax(16rem,16.67vw)";
const grid1280 = `${side1280} 1fr ${side1280}`;
const gap1280 = "calc(2rem + 3vw)";
const area1280 =
  '"gtitle gtitle ." "gside1 gbody gside3" "gside2 gbody gside3" ". gbottom ."';

// = = =

export default {
  single: {
    container: {
      ...basicSingleGrid,
      gridTemplateColumns: [null, null, null, grid992, grid1280],
      gridColumnGap: [gap992, null, null, null, gap1280],
      gridTemplateAreas: [null, null, null, area992, area1280],
      gridTemplateRows: "auto auto 1fr auto",
    },
    header: {
      pt: [8, null, 12],
      pb: [8, null, 12],
      gridArea: "gtitle",
    },
    title: { variant: "text.entryHeading" },
    excerpt: {
      // background: ["tomato", "purple", "aliceblue", "greenyellow", "magenta"], // leave for checking
      mt: [4],
      fontSize: [4, null, null, null, 5],
      lineHeight: [getLhByFontIndex(4), null, null, null, getLhByFontIndex(6)],
      color: "mutedFg",
    },
    byline: {
      mt: [8],
      mb: [4, null, 0],
      display: "flex",
      alignItems: "center",
    },
    tagsList: {
      lineHeight: getLhByFontIndex(3),
      mb: 8,
      maxWidth: "100%",
    },
    tag: {
      variant: "buttons.pill",
      fontSize: "0.702rem", // heheheh
    },
    body: {
      variant: "components.mdx",
      mb: [8, 12, null, 16],
      gridArea: "gbody",
    },
    tocBlock: {
      gridArea: "gside2",
      ml: [null, null, null, -6, null],
      position: ["sticky"],
      top: [0, null, null, "1rem"],
      zIndex: 1,
      maxHeight: "66vh", // Actual max-height is set from TOC component, but sticky elements must have height/max-height.
    },
    metaBlock: { gridArea: "gside1", mb: [12] },
    bottomBlock: { gridArea: "gbottom", mb: [6] }, // Adjust as needed if adding eg. webmentions in this block.
    ctaShare: {
      // TODO [low priority] move to separate component
      fontSize: 1,
      lineHeight: getLhByFontIndex(3),
      display: "flex",
      flexDirection: ["row", null, null, "column"],
      alignItems: ["center", null, null, "flex-start"],
      ".label": { pr: 2, color: "mutedFg", lineHeight: "1rem" },
      a: { variant: "links.inBodySecondary" },
    },
    series: {
      // TODO clamp at 3 lines
      // TODO [low priority] move to separate component
      borderTop: "4px solid currentColor",
      borderBottom: "2px solid currentColor",
      lineHeight: "paragraph",
      mb: 8,
      "header,a": { px: 1 },
      header: { py: 2 },
      ".h": { variant: "text.heading", lineHeight: getLhByFontIndex(3) },
      ".sub": { fontSize: 1, color: "mutedFg", mt: 1 },
      ".b": {
        py: 1,
        maxHeight: "66vh",
        overflowY: "auto",
        borderTop: "2px solid currentColor",
      },
      a: { variant: "links.boxyInList", py: 2 },
    },
  },

  //
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
      color: "mutedFg",
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
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical",
      },
    },
  },
};
