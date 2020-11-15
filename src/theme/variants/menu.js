import { getDashedBorder } from "src/utils/styles";

const outerWrapper = {
  backgroundColor: "menuBg",
  color: "menuFg",
  top: 0,
  bottom: 0,
  left: [0, null, "auto"],
  right: 0,
  position: "fixed",
  zIndex: 8,
  overflowY: "auto",
  maxWidth: [null, null, "52rem"],
  px: 11,
  py: 10,
  boxShadow: "rgba(0,0,0, 0.5) 0px 1px 16px 0px",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: [null, null, "center"],
  justifyContent: "flex-start",
  transition: "all .3s ease-in-out",
  opacity: 0,
  transform: "translateX(100%)",
  "&.is-open": {
    opacity: 1,
    transform: "translateX(0)",
  },
};

const innerWrapper = {
  display: "grid",
  border: "4px solid #000",
  borderTop: 0,
  mt: 4,
  gridTemplateColumns: [null, "1fr 1fr", "1fr 1fr 8rem"],
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
  small: { fontSize: 0 },
};

const groupBodyBase = {
  px: 2,
  py: 4,
  display: "grid",
  gridGap: "1rem",
  lineHeight: "1rem",
  ".desc": {
    fontSize: 0,
    maxWidth: [null, null, "calc(100% - 1rem)"],
  },
};

const group = {
  title: {
    fontSize: 4,
    fontWeight: "medium",
    px: 2,
    py: 2,
    borderTop: "4px solid #000",
    borderBottom: "4px solid #000",
    letterSpacing: "0.05em",
    background: "#000",
    color: "menuBg",
  },
  body: {
    ...groupBodyBase,
    pb: 5,
    a: {
      fontSize: 3,
      ...linkWithPrice,
    },
  },
  bodyWithImage: {
    ...groupBodyBase,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: "calc(100% - 2.75rem)",
    background: [null, "magenta", "initial"],
    li: { px: 2, textAlign: "center" },
    a: {
      fontSize: 2,
    },
    img: {
      backgroundColor: "rgba(0,0,0,0.1)",
      mt: 1,
      borderRadius: "50%",
      objectFit: "cover",
      width: ["3.5rem"],
      height: ["3.5rem"],
    },
  },
  caption: {
    fontSize: 0,
    lineHeight: "1rem",
    textAlign: "center",
    fontStyle: "italic",
    opacity: 0.8,
    px: 6,
    mt: 3,
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

const footnotes = {
  textAlign: "center",
  fontSize: ".75rem",
  fontWeight: "body",
  lineHeight: "1rem",
  mt: 4,
  "dt,dd": { display: "inline" },
  "*[role=img]": { display: "inline-block", width: "1.25rem" },
  dt: { "&::after": { content: '"="', mx: 1 } },
};

const out = {
  background: "#fff",
  position: "absolute",
  top: 0,
  left: 0,
  px: 8,
  py: 1,
  borderRadius: 4,
  fontSize: 1,
  fontWeight: 500,
  fontFamily: "Courier, monospace",
  // TODO randomize rotate
  transform: "rotate(2deg) translateX(2.75rem)",
  // "&:nth-child(1)": { transform: "rotate(2deg) translateX(2.75rem)" },
};

export default {
  outerWrapper,
  innerWrapper,
  group,
  link,
  contact,
  footnotes,
  legendIcon,
  out,
};
