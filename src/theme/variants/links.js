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

export default {
  // Looks like button but is a link.
  button: {
    ...basicStyles,
  },
  coverParent,
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
