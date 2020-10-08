export default {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    ml: 3,
    a: {
      fontWeight: "bold",
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
    "a:hover,button:hover": {
      color: "text",
      backgroundColor: "muted",
      borderRadius: 4,
    },
  },
};
