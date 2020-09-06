import { convertToRem } from "../../utils/calc-type";

const UL_MARGIN = 32;
const OL_MARGIN = 32;
const OL_NUMBER_SIZE = 18;
const CHILD_MARGIN = 4;

const commonLi = { "&:not(:last-child)": { mb: CHILD_MARGIN } };

const bulletList = {
  li: {
    ...commonLi,
    ml: convertToRem(UL_MARGIN),
    "ul,ul:first-child": { mt: CHILD_MARGIN },
  },
  "li::before": {
    // content: '"\\2022"', // dot
    // content: '"\\25A7"', // square w/ diagonal lines fill
    content: '"\\25E2"',
    fontSize: [null, "0.75em"],
    display: "inline-block",
    color: "primary",
    width: convertToRem(UL_MARGIN),
    ml: convertToRem(UL_MARGIN * -1),
    lineHeight: "1em", // Don't stretch line height
  },
  "li li::before": {
    content: '"\\25A7"', // 25A0 | 25A7
    color: "childListBullet",
  },
  "li li li::before": {
    content: '"\\25CF"',
    color: "#ffcc00",
  },
};

const numberedList = {
  counterReset: "steps",
  listStyle: "none",
  pl: 0,
  li: {
    ...commonLi,
    counterIncrement: "steps",
    ml: convertToRem(OL_MARGIN),
  },
  "li::before": {
    content: 'counter(steps)', // prettier-ignore
    display: "inline-block",
    width: convertToRem(OL_NUMBER_SIZE),
    // height: convertToRem(OL_NUMBER_SIZE),
    lineHeight: 1,
    fontSize: 1,
    fontWeight: "bold",
    color: "primary",
    ml: convertToRem(OL_MARGIN * -1),
    mr: convertToRem(OL_MARGIN - OL_NUMBER_SIZE),
  },
  // If needed, make a function to loop these.
  "&[start='2']": { counterReset: "steps 1" },
};

export default {
  bullet: bulletList,
  numbered: numberedList,
  inline: {
    listStyle: "none",
    p: 0,
    m: 0,
    li: {
      display: "inline-block",
      mr: 2,
    },
  },
};
