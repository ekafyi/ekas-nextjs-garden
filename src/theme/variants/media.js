export default {
  // MDX image container
  container: {
    minHeight: 200,
    // https://github.com/Aljullu/react-lazy-load-image-component/blob/master/src/effects/opacity.css
    ".lazy-load-image-background.opacity": {
      opacity: 0,
      "&.lazy-load-image-loaded": { opacity: 1, transition: "opacity .3s" },
    },
  },
};
