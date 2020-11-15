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
  backgroundColor: "muted",
  whiteSpace: "nowrap",
  display: "inline-flex",
  px: 3,
  cursor: "pointer",
  py: 2,
  mr: 1,
  mb: 1,
  "&:hover": {
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

export default {
  pill,
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
