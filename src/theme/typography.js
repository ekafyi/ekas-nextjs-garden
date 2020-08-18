import { fontSizesPx, convertToRem } from "../utils/calc-type";

// Define font-family.
const body = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
const heading = `inherit`;
const monospace = `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

export const fonts = {
  body,
  heading,
  monospace,
};

export const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
  medium: 500,
};

// const BASE_LINE_HEIGHT = 20; // belom
export const lineHeights = {
  body: 1,
  heading: 1,
  paragraph: "1.25rem",
  pre: "1.5rem",
};

// Default theme-ui values.
// const fontSizesPx = [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120, 144];

// Try implementing modular/musical scale thingie.
// https://spencermortensen.com/articles/typographic-scale/
// https://sashko.dev/typography-js/
// https://24ways.org/2019/a-modern-typographic-scale/
// See www.modularscale.com. Current ratio 8:9 (major second) = 9 / 8 = 1.125.
export const fontSizes = fontSizesPx.map((size) => convertToRem(size));

/**
 * Define here, import from elsewhere.
 */

// Headings

const h2Sizes = [5, null, null, 6];
const h2M = { "&:not(:first-child)": { mt: [9, null, 10] } };
const h3Sizes = 4;
const h3M = { "&:not(:first-child)": { mt: [7, null, 8] } };
const h4Sizes = 3;
const h4M = { "&:not(:first-child)": { mt: [6, null, 7], mb: 3 } };
const h5Sizes = [2, null, null, 3];

export const hCommon = {
  variant: "text.heading",
  "a:hover,a:focus,a:active": {
    textDecoration: "underline",
  },
};

const ANCHOR_ICON_MARGIN = -6;
const hAnchorCommon = {
  a: { position: "relative" },
  "a:hover,a:focus": {
    svg: {
      visibility: "visible",
      height: "1em", // match heading size
      left: [null, null, ANCHOR_ICON_MARGIN],
      right: [ANCHOR_ICON_MARGIN, null, "unset"],
    },
  },
};

export const h2 = {
  ...hCommon,
  ...h2M,
  fontSize: h2Sizes,
  "&[id]": hAnchorCommon,
};

export const h3 = {
  ...hCommon,
  ...h3M,
  fontSize: h3Sizes,
  "&[id]": hAnchorCommon,
};

export const h4 = {
  ...hCommon,
  ...h4M,
  fontSize: h4Sizes,
  "&[id]": hAnchorCommon,
};

export const h5 = {
  ...hCommon,
  fontSize: h5Sizes,
};
