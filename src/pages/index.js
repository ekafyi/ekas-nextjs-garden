import fs from "fs";
import matter from "gray-matter";
import glob from "fast-glob";
import { getContentGlob, getSlug } from "../utils/get-mdx";

import { HomePage } from "components";

export default HomePage;

export async function getStaticProps() {
  const files = glob.sync(getContentGlob());
  const allMdx = files.map((file) => {
    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);
    return {
      slug: getSlug(file),
      frontMatter: data,
    };
  });

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });

  return {
    props: {
      allMdx: orderedByDate,
    },
  };
}
