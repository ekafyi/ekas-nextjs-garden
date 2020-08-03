export const getSlug = (file) => {
  const split = file.split("/");
  const filename = split[split.length - 1];
  return filename.replace(".mdx", "");
};
