export default {
  // MDX image container
  container: {
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
  },
};
