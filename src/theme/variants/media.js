import { config } from "site.config.yml";
import { dark } from "src/theme/colors"; // Don't use theme colorMode for ogImg
import { getLineClamp, getRadialBg } from "src/utils/styles";

const modBgImg1 =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%230e0c1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23121531' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23121c47' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%230e245e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23002b77' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\")";
const modBgImg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg fill-opacity='0.75'%3E%3Ccircle fill='%23192139' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%2319274c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23172d5f' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23143273' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23113888' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23103d9c' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\")";

const svgBg = {
  backgroundImage: modBgImg,
  backgroundSize: "contain",
  backgroundPosition: "center",
};

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
    fontSize: 32,
    wordSpacing: "0.02em",
  },
  url: {
    fontSize: 24,
    position: "absolute",
    bottom: 16,
    fontWeight: "medium",
    letterSpacing: "0.02em",
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
