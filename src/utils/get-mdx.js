import fs from "fs";
import path from "path";
import matter from "gray-matter";
import glob from "fast-glob";

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

export const getAllPosts = (subdir = "", paramName = null) => {
  // ALTERNATIVE: files = fs.readdirSync("content/posts")
  const files = glob.sync(getContentGlob(subdir));

  const allMdx = files.map((file) => {
    // ALTERNATIVE: path.join(path.join(process.cwd()), file); // ? Returns full path instead of relative to project root; not sure if necessary.
    const fileContents = fs.readFileSync(file); // file vs fullPath
    const { data } = matter(fileContents);
    return {
      slug: getSlug(file, subdir),
      frontMatter: data,
      ...(paramName && { dynHref: getDynHref(paramName, subdir) }),
    };
  });

  return allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });
};
