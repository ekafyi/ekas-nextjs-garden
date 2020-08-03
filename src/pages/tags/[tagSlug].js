import fs from "fs";
import matter from "gray-matter";
import glob from "fast-glob";
import { getContentGlob, getSlug } from "../../utils/get-mdx";

// Make sure there's no unused import that contains fs
// as it causes this error: https://github.com/vercel/next.js/discussions/14450

const Tag = ({ allMdx }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 30px",
          fontFamily: `'Lato', sans-serif`,
        }}
      >
        <main style={{ maxWidth: "720px", width: "100%" }}>
          <h1>asdada</h1>
          <div>sadsda</div>
        </main>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  // TODO go through each mdx file in specified dir,
  // check if it has tags
  // save the tags in an array
  // then create array like below

  const paths = [
    {
      params: {
        tagSlug: "foo",
      },
    },
    {
      params: {
        tagSlug: "bar",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tagSlug } }) {
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

export default Tag;
