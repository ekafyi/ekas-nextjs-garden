import { ogImgWidth, ogImgHeight } from "site.config.yml";
import { dark } from "src/theme/colors"; // Don't use theme colorMode for ogImg

// Social/OpenGraph image
const ogImg = {
  card: {
    w: ogImgWidth,
    h: ogImgHeight,
    backgroundColor: dark.background,
    color: dark.text,
    p: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 80,
    mb: 8,
    pt: 8,
    borderTop: ".5rem solid",
    lineHeight: 1.1,
  },
  desc: {
    fontSize: 32,
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
