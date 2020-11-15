const BURGER_SIZE = 32;
const BUN_HEIGHT = 4;

const burger = {
  lineHeight: "1rem",
  position: "relative",
  overflow: "hidden",
  width: BURGER_SIZE,
  height: BURGER_SIZE,
  zIndex: 9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  cursor: "pointer",
  transition: "all 0.2s",
  "&.is-open": {
    backgroundColor: "menuBg",
    pl: 1,
    transform: "scale(1.25)",
  },
  ">*": {
    width: BURGER_SIZE,
    height: BUN_HEIGHT,
    backgroundColor: "text",
    borderRadius: ".5rem",
    transition: "all 0.3s linear 0s",
    position: "relative",
    transformOrigin: "0.5px center",
    "&:first-child": { transform: "rotate(0deg)" },
    "&:nth-child(2)": { transform: "translateX(0px)", opacity: 1 },
    "&:last-child": { transform: "rotate(0deg)" },
  },
  "&.is-open>*": {
    "&:first-child": { transform: "rotate(45deg)" },
    "&:nth-child(2)": { transform: "translateX(100%)", opacity: 0 },
    "&:last-child": { transform: "rotate(-45deg)" },
    backgroundColor: "#000",
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
  iconButton: { mr: [2, 4], py: 1, px: 2 },
  burger,
};
