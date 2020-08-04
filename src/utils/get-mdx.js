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
    ? `/${subdir}/${filename.replace(".mdx", "")}`
    : `${filename.replace(".mdx", "")}`; // TODO go back to this. if using initial slash, http://localhost:3000/posts/blah does not work
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

/**
 * Check a post's frontmatter to see if it contains tag.
 * @param {string} fileContents
 * @param {string} tag
 */
const hasTag = (fileContents, tag) => {
  const { data } = matter(fileContents);
  if (data.tags) {
    return data.tags.includes(tag) ? true : false;
  }
  return false;
};

const hasAnyTag = (fileContents) => {
  const { data } = matter(fileContents);
  return data.tags ? true : false;
};

// Like getAllPosts, but with tag.
export const getPostsByTag = (tag = "", subdir = "", paramName = null) => {
  const files = glob.sync(getContentGlob(subdir));

  const allMdx = files
    .map((file) => {
      return {
        slug: file,
        content: fs.readFileSync(file),
      };
    })
    .filter((fileObj) => {
      return hasTag(fileObj.content, tag);
    })
    .map((fileObj) => {
      const { data } = matter(fileObj.content);
      return {
        slug: getSlug(fileObj.slug, subdir),
        frontMatter: data,
        ...(paramName && { dynHref: getDynHref(paramName, subdir) }),
      };
    });

  return allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });
};

export const getAllTags = (subdir = "") => {
  const files = glob.sync(getContentGlob(subdir));
  const tags = files
    .map((file) => {
      return fs.readFileSync(file);
    })
    .filter((fileContents) => {
      return hasAnyTag(fileContents);
    })
    .map((fileContents) => {
      const { data } = matter(fileContents);
      return data.tags;
    })
    .flat();
  return tags;
};

export const getAllTagsStaticPaths = (subdir = "") => {
  const tags = getAllTags(subdir);
  const tagPaths = tags.map((tag) => {
    return {
      params: { tag },
    };
  });
  return tagPaths;
};
