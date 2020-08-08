const SEP = " | ";

const addInitialSlash = (string) => {
  return string.charAt(0) === "/" ? string : `/${string}`;
};

export const getMetaTitle = (title, siteTitle) => {
  return title ? `${title}${SEP}${siteTitle}` : siteTitle;
};

export const getMetaDesc = (desc, siteDesc) => {
  return desc || siteDesc;
};

export const getCanonical = (path, site) => {
  return path ? `${site}/${path}` : site;
};

export const getImg = (img, siteImg, baseUrl) => {
  // This breaks if we use CDN / absolute image paths. Good enough for now. 🤷🏽‍♀️
  return img
    ? `${baseUrl}${addInitialSlash(img)}`
    : `${baseUrl}${addInitialSlash(siteImg)}`;
};
