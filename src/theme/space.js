// Uses Tailwind spacing.
// https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale
const getSpacing = (scale = 0.25, iteration = 64) => {
  let arr = [];
  for (let i = 0; i < iteration; i++) {
    arr[i] = scale * i;
  }
  return arr;
};

export default getSpacing().map((spacing) => `${spacing}rem`);
// ["0rem", "0.25rem", "0.5rem", "0.75rem", "1rem", "1.25rem", ...]
