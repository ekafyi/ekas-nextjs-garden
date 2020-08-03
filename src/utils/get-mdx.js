export const CONTENT_PATH = "content"; // no trailing slash

export const getContentGlob = (subdir = "") => {
  return `${CONTENT_PATH}/${subdir ? `${subdir}/` : ""}**/*.mdx`;
};

export const getSlug = (file) => {
  const split = file.split("/");
  const filename = split[split.length - 1];
  return filename.replace(".mdx", "");
};
