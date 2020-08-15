export default {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 32,
    mt: -2,
    mb: 2,
    fontSize: 1,
    ">*": {
      display: "flex",
      justifyContent: "center",
      fontWeight: "medium",
      ">*:not(:last-child)": {
        mr: 3,
      },
    },
  },
  bc: {
    a: {
      fontWeight: "bold",
    },
    "*[aria-hidden]": {
      mx: 1,
      color: "muted",
      opacity: 0.75,
    },
  },
};
