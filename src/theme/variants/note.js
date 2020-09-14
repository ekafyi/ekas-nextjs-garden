import { getLhByFontIndex } from "../../utils/calc-type";

const basicSingleGrid = {
  display: [null, null, null, "grid"],
};

const left992 = "8rem";
const right992 = "minmax(12rem,16.67vw)";
const grid992 = `${left992} minmax(0,1fr) ${right992}`;
const gap992 = "calc(1rem + 3vw)";

const area992 = '". gtitle gtitle" "gside1 gbody gside2" "gside1 gbody gside3" "gside1 gbody gside4" ". gbottom ."'; // prettier-ignore

// TODO [low priority] choose one
// const left1280 = "minmax(10rem,6.25vw)";
// const right1280 = "minmax(16rem,18.75vw)";
const left1280 = "minmax(12rem,16.67vw)";
const right1280 = "minmax(12rem,16.67vw)";
const grid1280 = `${left1280} minmax(0,1fr) ${right1280}`;

const gap1280 = "calc(3rem + 3vw)";
const area1280 = '". gtitle ." "gside1 gbody gside2" "gside1 gbody gside3" "gside1 gbody gside4" ". gbottom ."'; // prettier-ignore
// area1280 cuma beda di gtitle

// = = =

export default {
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
    lineHeight: "1rem",
    mb: 8,
    maxWidth: "100%",
    a: { fontSize: "0.702rem" }, // heheheh
  },
  body: {
    variant: "components.mdx",
    mb: [8, 12, null, 16],
    gridArea: "gbody",
  },
  metaBlock: {
    gridArea: "gside1",
    mb: [12],
    position: [null, null, null, "sticky"],
    top: [null, null, null, "1rem"],
    maxHeight: "66vh",
  },
  bottomBlock: { gridArea: "gbottom", mb: [6] }, // Adjust as needed if adding eg. webmentions in this block.

  //

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
    mb: [8, null, null, "10vh"],
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
};
