import { convertToRem } from "../../utils/calc-type";

const UL_MARGIN = 24;
const OL_MARGIN = 32;
const OL_NUMBER_SIZE = 18;

const commonLi = { "&:not(:last-child)": { mb: 2 } };

const bulletList = {
  li: {
    ...commonLi,
    ml: convertToRem(UL_MARGIN),
    "ul,ul:first-child": { mt: 2 },
  },
  "li::before": {
    content: '"\\2022"',
    display: "inline-block",
    color: "primary",
    width: convertToRem(UL_MARGIN),
    ml: convertToRem(UL_MARGIN * -1),
    pl: 1,
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
    height: convertToRem(OL_NUMBER_SIZE),
    lineHeight: convertToRem(OL_NUMBER_SIZE),
    borderRadius: "50%",
    textAlign: "center",
    fontSize: 0,
    fontWeight: "bold",
    color: "background",
    backgroundColor: "primary",
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
