import { getLhByFontIndex } from "../../utils/calc-type";

const blockContentCommon = {
  fontSize: [2, null, 3],
  lineHeight: [getLhByFontIndex(3), null, getLhByFontIndex(4)], // Repeat so it does not get overridden.
  mt: [4, null, 5],
  "&:first-child": { mt: 0 },
  a: { variant: "links.inBody" },
  code: { variant: "components.code.inline" }, // = inlineCode in theme.styles
};

export default {
  h2: { variant: "text.subheading.h2" },
  h3: { variant: "text.subheading.h3" },
  h4: { variant: "text.subheading.h4" },
  h5: { variant: "text.subheading.h5" },
  //
  p: { variant: "text.paragraph" },
  ul: { variant: "list.bullet" },
  ol: { variant: "list.numbered" },
  "p,ul,ol": blockContentCommon,
  //
  ".eka-cblock": { variant: "components.code.block.container" },
};
