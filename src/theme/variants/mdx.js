import { getLhByFontIndex } from "../../utils/calc-type";

const blogImgM = { my: [8, null, 12] };

const blockContentCommon = {
  fontSize: [2, null, 3],
  lineHeight: [getLhByFontIndex(3), null, getLhByFontIndex(4)], // Repeat so it does not get overridden.
  mt: [4, 5, 8],
  "&:first-child": { mt: 0 },
  a: { variant: "links.inBody" },
  code: { variant: "components.code.inline" }, // = inlineCode in theme.styles
  "+ .img-container": blogImgM,
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
  blockquote: { variant: "text.blockquoteCenter" }, // or blockquoteCenterLineSep
  figcaption: { variant: "text.caption" },
  figure: blogImgM,

  // ".eka-cblock": { variant: "components.code.block.container" },
};
