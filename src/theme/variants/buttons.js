const mediumSpacing = {
  px: 3,
  py: 2,
  my: 1,
};

export const basicStyles = {
  border: "2px solid",
  display: "inline-block",
  borderRadius: 2,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 700,
};

const pill = {
  fontSize: 0,
  fontWeight: "medium",
  borderRadius: 8,
  // backgroundColor: "muted",
  whiteSpace: "nowrap",
  display: "inline-flex",
  px: 3,
  // py: 1,
  // mr: 2, mb: 2,
  cursor: "pointer",
  // ? new
  py: "calc(0.5rem - 1px)", // keep vertical rhythm
  mr: 1,
  mb: 1,
  border: "1px solid",
  borderColor: "muted",
  // ?
  "&:hover,&:focus": {
    color: "background",
    backgroundColor: "primary",
  },
  "&.is-active": {
    color: "background",
    backgroundColor: "text",
    borderColor: "text",
  },
  // Note: Set lineHeight from parent/extending component.
};

const ham = {
  fontWeight: 500,
  fontSize: 0,
  backgroundColor: "text",
  color: "background",
  px: [1, null, 2],
  ml: -1,
  transform: "rotate(-8deg)",
  transition: "all .1s ease-in-out",
};

export default {
  pill,
  ham,
  colorModeDark: { backgroundColor: "muted", color: "#ffe100" },

  // ! copied from other site
  regular: {
    ...basicStyles,
    ...mediumSpacing,
    color: "text",
    backgroundColor: "background",
    "&:hover": {
      color: "primary",
    },
  },
  primary: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "primary",
    borderColor: "primary",
    "&:hover": {
      backgroundColor: "text",
      borderColor: "text",
    },
  },
  secondary: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "secondary",
    borderColor: "secondary",
    "&:hover": {
      backgroundColor: "text",
      borderColor: "text",
    },
  },
  invert: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "text",
    borderColor: "text",
    "&:hover": {
      backgroundColor: "primary",
      borderColor: "primary",
    },
  },
};
