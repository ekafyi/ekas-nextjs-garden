import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import glob from "fast-glob";
import { getContentGlob, getContentPath, getSlug } from "../../utils/get-mdx";

import fs from "fs";
import path from "path";

import * as components from "components";

export default function TestPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, components);
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  );
}

export async function getStaticPaths() {
  const files = glob.sync(getContentGlob("posts")); // only generate paths from 'content/posts'
  const paths = files.map((file) => {
    return {
      params: {
        slug: getSlug(file),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // from https://github.com/hashicorp/next-mdx-remote

  // prettier-ignore
  const foo = path.join(path.join(process.cwd()), `${getContentPath("posts")}/${slug}.mdx`);
  const source = fs.readFileSync(foo);

  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, components, null, data);
  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}
