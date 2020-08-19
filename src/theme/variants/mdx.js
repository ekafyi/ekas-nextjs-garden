import { getLhByFontIndex } from "../../utils/calc-type";
import { h2, h3, h4, h5 } from "../typography";
import { blockCode, pre } from "./code";

const blockContentCommon = {
  fontSize: [2, null, 3],
  lineHeight: [getLhByFontIndex(3), null, getLhByFontIndex(4)], // Repeat so it does not get overridden.
  mt: [4, null, 5],
  "&:first-child": { mt: 0 },
  a: { variant: "links.inBody" },
  // code: { variant: "components.code.inline" },
};

export default {
  h2,
  h3,
  h4,
  h5,
  //
  p: { variant: "text.paragraph" },
  ul: { variant: "list.bullet" },
  ol: { variant: "list.numbered" },
  "p,ul,ol": blockContentCommon,
  //
  pre,
  blockCode,
  ".eka-cb": { variant: "components.code.fallback" },
};
