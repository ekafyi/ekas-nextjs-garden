import fs from "fs";
import path from "path";
import matter from "gray-matter";
import glob from "fast-glob";
import mdToc from "markdown-toc";

import { getTagFriendlyName } from "./get-taxonomy";
import { tags as tagsConfig } from "../../taxonomies.yml";

export const CONTENT_PATH = "content"; // no trailing slash

/**
 * Helper function to remove duplicate items in array.
 */
const dedupe = (array) => {
  return [...new Set(array)];
};

/**
 * Get content path. Does not include file.
 * @param {string} [subdir] - Content subdirectory, eg. "posts"
 *
 * Note: implement these if we ever need full path.
 * // const a = path.join(path.join(process.cwd()), getContentPath("posts"));
 * // const b = path.join(path.join(process.cwd()), `${getContentPath("posts")}/blah.mdx`);
 */
export const getContentPath = (subdir = "") => {
  return `${CONTENT_PATH}${subdir ? `/${subdir}` : ""}`;
};

/**
 * Get mdx content file glob.
 * @param {string} [subdir] - Content subdirectory, eg. "posts"
 */
export const getContentGlob = (subdir = "") => {
  return `${CONTENT_PATH}/${subdir ? `${subdir}/` : ""}**/*.mdx`;
};

/**
 * Get slug from mdx file.
 * @param {string} file - Filename with full path
 * @param {string} [subdir] - Content subdirectory, eg. "posts"
 */
export const getSlug = (file, subdir = "") => {
  const split = file.split("/");
  const filename = split[split.length - 1];
  return subdir
    ? `/${subdir}/${filename.replace(".mdx", "")}`
    : `${filename.replace(".mdx", "")}`; // TODO go back to this. if using initial slash, http://localhost:3000/posts/blah does not work
};

/**
 * Create dynamic href value for Next Link component, eg. `posts/[slug]`.
 * @param {string} paramName - Dynamic query parameter name
 * @param {string} [subdir] - Content subdirectory, eg. "posts"
 */
export const getDynHref = (paramName, subdir = "") => {
  return `${subdir ? `/${subdir}` : ""}/[${paramName}]`;
};

/**
 * Sort mdx files by date.
 * @param {array} files - Array of files that have a 'date' field in its frontmatter.
 */
export const sortByDate = (files = []) => {
  return files.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });
};

/**
 * Get content from all mdx files in specified content (sub)directory.
 * @param {string} [subdir]
 * @param {string} [paramName]
 *
 * Note: We can also use fs.readdirSync(getContentPath(subdir)) to get 'files'.
 */
export const getAllPosts = (subdir = "", paramName = null) => {
  const files = glob.sync(getContentGlob(subdir));

  const allMdx = files.map((file) => {
    const fileContents = fs.readFileSync(file); // check note in getContentPath() if replacing file with fullPath
    const { data, content } = matter(fileContents);
    return {
      slug: getSlug(file, subdir),
      frontMatter: data,
      mdx: content,
      ...(paramName && {
        dynHref: getDynHref(paramName, subdir),
      }),
    };
  });

  return sortByDate(allMdx);
  // return allMdx.sort((a, b) => { return new Date(b.frontMatter.date) - new Date(a.frontMatter.date) });
};

/**
 * Get a single post's frontmatter and mdx content based on slug.
 * @param {string} slug
 * @param {string} [subdir]
 */
export const getPost = (slug, subdir = "") => {
  const files = glob.sync(getContentGlob(subdir));

  // content/posts/relative-image-paths-in-mdx-with-remark.mdx
  const fullPath = files.filter((file) => {
    return getSlug(file) === slug;
  })[0];
  if (!fullPath) {
    console.warn("No MDX file found for slug");
    return false;
  }

  const fileContents = fs.readFileSync(fullPath);
  const { content, data } = matter(fileContents);
  const toc = mdToc(content).content || null;

  return {
    mdx: content,
    frontMatter: data,
    toc,
  };
};

/**
 * Check a post's frontmatter to see if it contains a specific tag.
 * @param {(Buffer|string)} fileContents - data returned by fs.readFileSync() https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
 * @param {string} tag - tag name, eg. "nextjs"
 */
const hasTag = (fileContents, tag) => {
  const { data } = matter(fileContents);
  if (data.tags) {
    return data.tags.includes(tag) ? true : false;
  }
  return false;
};

/**
 * Check a post's frontmatter to see if it contains a specific tag.
 * @param {(Buffer|string)} fileContents - data returned by fs.readFileSync() https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
 */
const hasAnyTag = (fileContents) => {
  const { data } = matter(fileContents);
  return data.tags ? true : false;
};

/**
 * Get posts that has a specific tag in its frontmatter. Mostly similar to getAllPosts().
 * @param {string} tag
 * @param {string} [subdir]
 * @param {string} [paramName]
 */
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

  return sortByDate(allMdx);
};

/**
 * Get all frontmatter 'tags' from all content files.
 * @param {string} [subdir]
 */
export const getAllTags = (subdir = "") => {
  const files = glob.sync(getContentGlob(subdir));
  const tagsDupe = files
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
  return dedupe(tagsDupe)
    .map((tag) => getTagFriendlyName(tag))
    .sort();
};

/**
 * Get all content file slugs.
 * @param {string} [subdir]
 */
export const getAllSlugs = (subdir = "") => {
  const files = glob.sync(getContentGlob(subdir));
  return files.map((file) => {
    return getSlug(file);
  });
};

/**
 * Get array of objects containing all tags for getStaticPaths().
 * @param {string} [subdir]
 */
export const getAllTagsStaticPaths = (subdir = "") => {
  const tags = getAllTags(subdir);
  const tagPaths = tags.map((tag) => {
    return {
      params: { tag: getTagFriendlyName(tag) },
    };
  });
  return tagPaths;
};

/**
 * Get array of objects containing all post slugs for getStaticPaths().
 * @param {string} [subdir]
 */
export const getAllSlugsStaticPaths = (subdir = "") => {
  const slugs = getAllSlugs(subdir);
  const slugPaths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });
  return slugPaths;
};
