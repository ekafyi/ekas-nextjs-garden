export const CONTENT_PATH = "content"; // no trailing slash

export const getContentGlob = (subdir = "") => {
  return `${CONTENT_PATH}/${subdir ? `${subdir}/` : ""}**/*.mdx`;
};

export const getSlug = (file, subdir = "") => {
  const split = file.split("/");
  const filename = split[split.length - 1];
  return subdir
    ? `${subdir}/${filename.replace(".mdx", "")}`
    : filename.replace(".mdx", "");
};

export const getDynHref = (paramName, subdir = "") => {
  return `${subdir ? `/${subdir}` : ""}/[${paramName}]`;
};
