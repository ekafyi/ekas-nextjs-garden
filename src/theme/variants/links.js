import { basicStyles } from "./buttons";

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

const skip = {
  backgroundColor: "text",
  color: "background",
  fontWeight: "bold",
  fontSize: 1,
  p: 2,
  borderRadius: 4,
  border: "2px solid",
  borderColor: "primary",
  display: "inline-block",
  left: "0",
  position: "absolute",
  zIndex: 2,
  height: "2rem",
  transform: "translateY(-100%)",
  transition: "transform .2s",
  "&:focus": {
    transform: "translateY(0%)",
  },
};

const backToTop = {
  mt: 6,
  display: "inline-block",
  borderBottom: "2px solid currentColor",
};

export default {
  button: { ...basicStyles }, // Looks like button but is a link.
  coverParent,
  skip,
  backToTop,
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
