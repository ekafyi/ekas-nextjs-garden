import { fontSizesPx, convertToRem } from "../utils/calc-type";
import { config } from "../../site.config.yml";

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
};

// Default theme-ui values.
// const fontSizesPx = [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120, 144];

// Try implementing modular/musical scale thingie.
// https://spencermortensen.com/articles/typographic-scale/
// https://sashko.dev/typography-js/
// https://24ways.org/2019/a-modern-typographic-scale/
// See www.modularscale.com. Current ratio 8:9 (major second) = 9 / 8 = 1.125.
export const fontSizes = fontSizesPx.map((size) => convertToRem(size));
