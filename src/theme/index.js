/**
 * Create a theme object based on the Theme Specification.
 *
 * https://theme-ui.com/theme-spec
 *
 * Theme object properties consist of:
 * - breakpoints - self-explanatory
 * - scales - objects/arrays of values for related CSS properties (specified keys only; we CANNOT add our own)
 * - variants - style objects for "components" (any user-defined object names)
 * - styles - style objects for HTML elements for MDX (specified elements only; we CANNOT add our own)
 */

import breakpoints from "./breakpoints";

// 1) scales
import colors from "./colors";
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography";
import space from "./space";
// import sizes from "./sizes"; // NOT USED

// 2) variants
import variants from "./variants";

// 3) styles
import styles from "./styles";

// = = =

export default {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  ...variants,
  styles,
};
