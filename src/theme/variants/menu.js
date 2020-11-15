import { getDashedBorder, getLineClamp } from "src/utils/styles";

const outerWrapper = {
  backgroundColor: "menuBg",
  color: "menuFg",
  top: 0,
  bottom: 0,
  left: [0, "auto"],
  right: 0,
  position: "fixed",
  zIndex: 8,
  overflowY: "auto",
  maxWidth: [null, "38rem", null, "50rem"],
  px: [11, null, 10],
  py: 10,
  boxShadow: "rgba(0,0,0, 0.5) 0px 1px 16px 0px",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: [null, null, null, "center"],
  justifyContent: "flex-start",
  transition: "all .3s ease-in-out",
  opacity: 0,
  transform: "translateX(100%)",
  "&.is-open": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "@media screen and (min-height: 48rem) and (orientation: landscape)": {
    justifyContent: "center",
  },
  "@media screen and (min-height: 72rem)": {
    justifyContent: "center",
  },
};

const innerWrapper = {
  display: "grid",
  border: "4px solid #000",
  borderTop: 0,
  mt: 4,
  gridTemplateColumns: [null, "1fr 1fr", null, "1fr 1fr 9rem"],
  backgroundColor: "#000",
  gridColumnGap: 1,
  ">*": { backgroundColor: "menuBg" },
};

const legendIcon = {
  display: "inline-block",
  verticalAlign: "bottom",
  fontSize: ".6em",
  ml: 1,
};

const linkWithPrice = {
  backgroundRepeat: "repeat-x",
  backgroundSize: "4px 2px",
  backgroundPosition: "1px .6em",
  backgroundImage: getDashedBorder({ color: "#00000050" }),
  display: "flex",
  justifyContent: "space-between",
  ">*": {
    backgroundColor: "menuBg",
    "&:first-child": { pr: 2 },
    "&:last-child:not(:first-child)": { pl: 1 },
  },
  ".num": { fontSize: 0 },
};

const groupBodyBase = {
  px: 2,
  py: 4,
  display: "grid",
  gridGap: "1rem",
  lineHeight: "1rem",
  li: { position: "relative" },
};

const foodCoffeeBase = {
  ...groupBodyBase,
  minHeight: "calc(100% - 3rem)",
  pt: 2,
  pb: 3,
  fontSize: [1, null, 2],
  textAlign: "center",
  a: { ...getLineClamp(2), pb: 0, lineHeight: [null, null, "paragraph"] },
  ".desc": { fontSize: ".625rem", lineHeight: ".75rem", mt: 1 },
};

const group = {
  title: {
    fontSize: 3,
    fontWeight: "medium",
    px: 2,
    py: 2,
    borderTop: "4px solid #000",
    borderBottom: "4px solid #000",
    letterSpacing: "0.05em",
    background: "#000",
    color: "menuBg",
  },
  mainNav: {
    ...groupBodyBase,
    pb: 5,
    a: {
      fontSize: 3,
      ...linkWithPrice,
    },
    ".desc": {
      fontSize: [".75rem", 0],
      maxWidth: "calc(100% - 1rem)",
    },
    "li:nth-child(1) .na": { transform: "rotate(2deg) translateX(2.75rem)" },
    "li:nth-child(2) .na": {
      transform: "rotate(-0.5deg) translateX(1.75rem) translateY(.25rem)",
    },
    "li:nth-child(4) .na": {
      transform: "rotate(-1deg) translateX(2rem) translateY(.5rem)",
    },
  },
  food: {
    ...foodCoffeeBase,
    gridGap: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: ["space-evenly", "center"],
    alignItems: "flex-start", // "center" / "flex-end" breaks if food has desc
    ">*": {
      px: 2,
      py: 1,
      flex: ["1 0", null, "1 0 50%"],
      maxWidth: [null, "8rem", "9rem"],
    },
    img: {
      backgroundColor: "rgba(0,0,0,0.1)",
      mt: 1,
      borderRadius: "50%",
      objectFit: "cover",
      width: ["3rem", "3.5rem"],
      height: ["3rem", "3.5rem"],
    },
  },
  coffee: {
    ...foodCoffeeBase,
    alignItems: "flex-end",
    gridTemplateColumns: [
      "repeat(6, minmax(0, 1fr))",
      "repeat(10, minmax(0, 1fr))",
      null,
      "unset",
    ],
    ">*": {
      gridColumn: "span 2",
      "&:nth-child(4)": { gridColumn: ["2/span 2", "span 2"] },
      "&:nth-child(5)": { gridColumn: ["4/span 2", "span 2"] },
    },
    // img: { width: "3rem", height: "3rem" }, // re-enable if using image
  },
};

const link = {
  variant: "links.coverParent",
  fontWeight: "bold",
  display: "block",
  pb: 1,
  "&:hover,&:active": { textDecoration: "underline" },
};

const contact = {
  fontSize: 0,
  fontweight: "body",
  lineHeight: "1rem",
  position: "absolute",
  top: [2, null, 4],
  left: [2, null, 4],
  opacity: 0.8,
  transform: [
    "rotate(-90deg) translateX(-100%) translateY(-4px)",
    null,
    "unset",
  ],
  transformOrigin: "0 0",
};

const caption = {
  fontSize: 0,
  lineHeight: "1rem",
  textAlign: "center",
  fontStyle: "italic",
  opacity: 0.8,
  px: 4,
  mb: 2,
};

const footnotes = {
  textAlign: "center",
  fontSize: ".75rem",
  fontWeight: "body",
  lineHeight: "1rem",
  mt: 4,
  mb: -4, // balance top whitespace
  "dt,dd": { display: "inline" },
  "*[role=img]": { display: "inline-block", width: "1.25rem" },
  dt: { "&::after": { content: '"="', mx: 1 } },
};

const out = {
  background: "#fff",
  position: "absolute",
  top: 0,
  left: 0,
  px: [4, 8],
  py: "2px",
  borderRadius: 4,
  fontSize: 1,
  fontWeight: 500,
  fontFamily: "Courier, monospace",
};

export default {
  outerWrapper,
  innerWrapper,
  group,
  link,
  contact,
  caption,
  footnotes,
  legendIcon,
  out,
};
