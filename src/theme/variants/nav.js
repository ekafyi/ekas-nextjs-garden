const BURGER_SIZE = 32;
const BUN_HEIGHT = 4;

const burger = {
  lineHeight: "1rem",
  position: "relative",
  overflow: "hidden",
  width: BURGER_SIZE,
  height: BURGER_SIZE,
  // p: ".125rem",
  zIndex: 9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  cursor: "pointer",
  transition: "all 0.2s",
  "&.is-open": {
    pl: 1,
    position: "fixed",
    backgroundColor: "menuBg",
    // top: 2,
    right: [1, null, "auto"],
    transform: "scale(1.25)",
  },
  ">*": {
    width: BURGER_SIZE,
    height: BUN_HEIGHT,
    backgroundColor: "text",
    borderRadius: ".5rem",
    transition: "all 0.3s linear 0s",
    position: "relative",
    transformOrigin: "0px center",
    "&:first-child": { transform: "rotate(0deg)" },
    "&:nth-child(2)": { transform: "translateX(0px)", opacity: 1 },
    "&:last-child": { transform: "rotate(0deg)" },
  },
  "&.is-open>*": {
    "&:first-child": { transform: "rotate(45deg)" },
    "&:nth-child(2)": { transform: "translateX(100%)", opacity: 0 },
    "&:last-child": { transform: "rotate(-45deg)" },
    backgroundColor: "#000", // TODO decide design
  },
};

const menu = {
  backgroundColor: "menuBg",
  color: "menuFg",
  top: 0,
  bottom: 0,
  left: [0, null, "auto"],
  right: 0,
  position: "fixed",
  zIndex: 8,
  overflowY: "auto",
  width: [null, null, 768],
  px: 11,
  py: 12,
  boxShadow: "rgba(0,0,0, 0.5) 0px 1px 16px 0px",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: [null, null, "center"],
  transition: "all .3s ease-in-out",
  opacity: 0,
  transform: "translateX(100%)",
  "&.is-open": {
    opacity: 1,
    transform: "translateX(0)",
  },
};

const menuInner = {
  display: "grid",
  border: "4px solid #000",
  borderTop: 0,
  mt: 4,
};

const menuGroup = {
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
    px: 2,
    py: 4,
    display: "grid",
    gridGap: "1rem",
    lineHeight: "1rem",
    ".link__desc": {
      fontSize: 0,
      // mt: 1,
      maxWidth: [null, null, "calc(100% - 2rem)"],
    },
    a: {
      fontSize: 3,
      fontWeight: "bold",
      display: "block",
      pb: 1,
      "&:hover,&:active": { textDecoration: "underline" },
      "&:hover::before": {
        content: '"👉🏽"',
        display: "inline-block",
        width: "1.375rem",
        ml: "-1.5rem",
        mr: ".125rem",
      },
    },
  },
};

// = = =

export default {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    height: 32,
    mt: [-2, null, 0],
    mb: 2,
    fontSize: 1,
    ">*": {
      display: "flex",
      justifyContent: "center",
      fontWeight: "medium",
    },
  },
  bc: {
    // ? decide placement
    // ml: 4,
    // ?
    a: {
      fontWeight: "bold",
      display: "inline-block",
      py: 1,
    },
    "*[aria-hidden]": {
      mx: 1,
      color: "mutedFg",
      opacity: 0.75,
    },
  },
  icons: {
    ".top-icon-btn": { mr: 2, py: 1, px: 2 },
    ">a": { opacity: 0.9 },
    "a:hover": {
      color: "text",
      backgroundColor: "muted",
      borderRadius: 4,
      opacity: 1,
    },
  },
  burger,
  menu,
  menuInner,
  menuGroup,
};
