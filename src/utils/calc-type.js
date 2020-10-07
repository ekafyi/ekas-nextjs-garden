// import { typoDefaults } from "../theme/typography";
import { config } from "../../site.config.yml";

const { BASE_SIZE, RATIO, SPACING, SCALE_FROM, SCALE_TO } = config.typography;

/**
 * Convert pixel value to rem.
 * @param {int} int - pixel value
 * @param {int} [rem] - 1rem equals how many px (default 16)
 * @returns {string} - eg. "1rem"
 */
export const convertToRem = (int, rem = BASE_SIZE) => {
  return `${
    int % BASE_SIZE > 0 ? Number.parseFloat(int / rem).toFixed(3) : int / rem
  }rem`;
};

export const getFontSizeByScaleIndex = (i) => {
  return Number.parseFloat(BASE_SIZE * Math.pow(RATIO, i)); // toFixed(3) doesn't work.
};

const fontSizesPx = [];
for (let i = SCALE_FROM; i <= SCALE_TO; i++) {
  fontSizesPx.push(getFontSizeByScaleIndex(i));
}
export { fontSizesPx };

// ie. snap to multiple of 4, starting from BASE_SIZE (see examples below)
// returns float(?)
export const getLhByFontSize = (fontSize) => {
  // console.log("fontSizeeeeee ", fontSize);
  // console.log("fontSizeeeeee ", fontSizesPx);

  if (fontSize < BASE_SIZE) return BASE_SIZE;

  const modulus = fontSize % SPACING;

  // eg. fontSize 16. 16 + 4 = 20.
  // if (modulus === 0) return fontSize + SPACING; // ? coba bentar
  if (modulus === 0) return fontSize + 2 * SPACING;
  // fontSize 18 ====> 18 + 4 = 22 ====> round up to 24.
  // fontSize 20.25 ====> 20.25 + 4 = 24.25 ====> round up to 28.
  else if (modulus > 0) {
    return fontSize - modulus + 2 * SPACING;
  }
  return false;
};

export const getLhByFontIndex = (i) => {
  if (fontSizesPx[i] < BASE_SIZE) return convertToRem(BASE_SIZE);
  else if (fontSizesPx[i] === BASE_SIZE)
    return convertToRem(BASE_SIZE + SPACING);

  return convertToRem(getLhByFontSize(fontSizesPx[i]));

  // // Use this if returning float
  // return getLhByFontSize(getFontSizeByScaleIndex(i));
};
