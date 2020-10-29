const BURGER_SIZE = 32;

const burger = {
  // backgroundColor: "muted",
  lineHeight: "1rem",
  position: "relative",
  overflow: "hidden",
  // top: "1rem",
  // left: "2rem",
  width: BURGER_SIZE,
  height: BURGER_SIZE,
  mt: -1,
  zIndex: 9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  cursor: "pointer",
  transition: "padding 0.2s",
  "&.is-open": { pl: 1 },
  ">*": {
    width: BURGER_SIZE,
    height: "0.25rem",
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
    "&:nth-child(2)": { transform: "translateX(20px)", opacity: 0 },
    "&:last-child": { transform: "rotate(-45deg)" },
  },
};

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
    ml: 4,
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
    ">*": {
      ml: [0, null, 1],
      py: 1,
      px: 2,
      color: "mutedFg",
    },
    ">a": { opacity: 0.9 },
    "a:hover,button:hover": {
      color: "text",
      backgroundColor: "muted",
      borderRadius: 4,
      opacity: 1,
    },
  },
  burger,
};
