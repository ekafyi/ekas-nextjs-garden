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
  return path
    ? `${site}/${path.startsWith("/") ? path.substring(1, path.length) : path}`
    : site;
};

export const getImg = (img, siteImg, baseUrl) => {
  // This breaks if we use CDN / absolute image paths. Good enough for now. 🤷🏽‍♀️
  return img
    ? `${baseUrl}${addInitialSlash(img)}`
    : `${baseUrl}${addInitialSlash(siteImg)}`;
};

export const buildOgUrl = ({ title, desc, path, tagText }) => {
  const base = "/api/social-img";

  const paramsObj = { title, desc, path, tagText };

  const queryString = Object.keys(paramsObj)
    .filter((key) => typeof paramsObj[key] !== "undefined")
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(paramsObj[key]) // prettier-ignore
    )
    .join("&");

  return `${base}${queryString ? `?${queryString}` : ""}`;
};

export const getOgDesc = (tags = []) => {
  if (!tags) return "by **Eka**";
  const tagsArr = tags
    .filter((item) => !item.includes("TAG_"))
    .map((item) => `#${item}`);
  return `by **Eka** · ${tagsArr.join(" ")}`;
};

export const getOgTagDesc = (tagName) => {
  if (!tagName) return false;
  return `tag archive **#${tagName}**`;
};
