/**
 * We can use any variant property keys/names, but some are used by Theme UI's components.
 * Refer to @types/theme-ui__components OR https://theme-ui.com/components/variants
 */

// Components
import code from "./code";
import footer from "./footer";
import header from "./header";
import mdx from "./mdx";
import menu from "./menu";
import nav from "./nav";
import note from "./note";
import notes from "./notes";
import toc from "./toc";
// import tomato from "./tomato";

// Shared/Utility
import buttons from "./buttons";
import grids from "./grids";
import layout from "./layout";
import links from "./links";
import list from "./list";
import media from "./media";
import text from "./text";

// = = =

export default {
  components: {
    code,
    footer,
    header,
    mdx,
    menu,
    nav,
    note,
    notes,
    toc,
    // tomato,
  },
  // Shared/Utility
  buttons,
  grids,
  layout,
  links,
  list,
  media,
  text,
};
