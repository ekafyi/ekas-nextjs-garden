import { basicStyles } from "./buttons";

const backToTop = {
  display: "inline-block",
  lineHeight: "1rem",
  // borderBottom: "2px solid currentColor",
  "&:hover,&:focus": { color: "primary" },
};

const boxyInList = {
  display: "block",
  fontSize: 1,
  fontWeight: "medium",
  "&:hover": { backgroundColor: "muted", color: "text" },
  "&:focus, &:active, &.is-active": {
    backgroundColor: "text",
    color: "background",
  },
  // Set paddings from the extending components.
};

const coverParent = {
  "&::after": {
    content: '""', // https://theme-ui.com/guides/object-styles/#pseudo-elements
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
};

const inBody = {
  fontWeight: "medium",
  borderBottom: "2px solid",
  borderBottomColor: "primary",
  "&:hover, &:focus": { color: "primary" },
};

const inBodySecondary = {
  color: "text",
  fontWeight: "bold",
  borderBottom: "2px solid currentColor",
  "&:hover, &:focus": { color: "primary" },
};

const skip = {
  backgroundColor: "text",
  color: "background",
  fontWeight: "bold",
  fontSize: 4,
  p: 3,
  borderRadius: 4,
  border: "2px solid",
  borderColor: "primary",
  display: "inline-block",
  left: "0",
  position: "absolute",
  zIndex: 2,
  // height: "3rem",
  transform: "translateY(-100%)",
  transition: "transform .2s",
  "&:focus": {
    transform: "translateY(0%)",
  },
};

export default {
  backToTop,
  boxyInList,
  button: { ...basicStyles }, // Looks like button but is a link.
  coverParent,
  inBody,
  inBodySecondary,
  skip,
};

// a: {
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     height: "4px",
//     bottom: "-4px",
//     left: 0,
//     right: 0,
//     mx: "auto",
//     backgroundColor: "primary",
//     transition: "0.2s",
//     zIndex: -1,
//   },
//   "&:hover::before": {
//     height: "8px",
//     bottom: "-4px",
//   },
// },
