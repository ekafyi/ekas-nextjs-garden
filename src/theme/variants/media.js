import { config } from "site.config.yml";
import { dark } from "src/theme/colors"; // Don't use theme colorMode for ogImg
import { getLineClamp, getRadialBg, getCirclesBg } from "src/utils/styles";

const svgBg = {
  backgroundImage: getCirclesBg({}),
  backgroundSize: "contain",
  backgroundPosition: "center",
};

const NAVY_BG = "hsla(220, 86%, 22%, 75%)";

const ogImgSmallText = { background: NAVY_BG, p: 1, borderRadius: 4 };
const ogImgCoffee = { color: dark.background, position: "absolute" };

// Social/OpenGraph image
const ogImg = {
  card: {
    backgroundColor: dark.background,
    // TODO decide bg
    ...svgBg,
    background: getRadialBg({}),
    //
    width: config.ogImgWidth,
    height: config.ogImgHeight,
    color: dark.text,
    p: 10,
    position: "relative",
    overflow: "hidden",
    "*": { letterSpacing: "0.01em" },
  },
  title: {
    fontWeight: "bold",
    fontSize: 72,
    mb: 16, // must be margin bcs we use lineClamp
    pt: 9, // balance borderTop
    pr: 4,
    borderTop: ".75rem solid",
    lineHeight: 1.125,
    ...getLineClamp(3),
  },
  desc: {
    ogImgSmallText,
    fontSize: 32,
    wordSpacing: "0.02em",
    display: "inline-block",
    lineHeight: 1.375,
    maxWidth: "75%",
    strong: { fontSize: "1.125em" },
    //// enable if using truncate
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
  },
  url: {
    ogImgSmallText,
    fontSize: "20px",
    letterSpacing: "0.02em",
    position: "absolute",
    bottom: 16,
    svg: {
      display: "inline-block",
      verticalAlign: "baseline",
      mr: 1,
    },
  },
  decor: {
    ...ogImgCoffee,
    bottom: -2,
    right: 6,
  },
  cupText: {
    display: "flex",
    position: "absolute",
    zIndex: 2,
    left: "50%",
    top: 24,
    transform: "translateX(-50%)",
    fontSize: "42px",
    ">*": {
      letterSpacing: "-1.5px",
      display: "inline-block",
    },
    ">*:first-child": { transform: "skewX(4deg)", mr: "1px" },
    ">*:last-child": {
      transform: "skewX(-4deg)",
      letterSpacing: "-1.75px",
    },
  },
  homeGraphics: {
    ...ogImgCoffee,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

// MDX image container
const postImg = {
  "&.is-loading": { minHeight: 200 },
  // https://github.com/Aljullu/react-lazy-load-image-component/blob/master/src/effects/opacity.css
  ".lazy-load-image-background.opacity": {
    opacity: 0,
    "&.lazy-load-image-loaded": {
      opacity: 1,
      transition: "opacity .3s",
    },
  },
  ".lazy-load-image-background.lazy-load-image-loaded": {
    display: "block !important",
    mx: "auto",
  },
};

export default {
  ogImg,
  postImg,
};
