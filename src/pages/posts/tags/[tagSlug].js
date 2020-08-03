// import fs from "fs";
// import MDX from "@mdx-js/runtime";
// import ReactDOM from "react-dom/server";
// import matter from "gray-matter";
// import glob from "fast-glob";
// import { getContentGlob, getSlug } from "../../../utils/get-mdx";
// import { getSortedPostsData } from "../../../utils/auo";

// import * as components from "components";

export async function getStaticPaths() {
  // TODO go through each mdx file in specified dir,
  // check if it has tags
  // save the tags in an array
  // then create array like below

  const paths = [
    { params: { tagSlug: "foo" } },
    { params: { tagSlug: "bar" } },
  ];

  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticProps({ params: { tagSlug } }) {
//   // const files = glob.sync(getContentGlob("posts")); // only look in 'content/posts'
//   // coba dulu
//   const fullPath = "content/posts/relative-image-paths-in-mdx-with-remark.mdx";
//   const mdxSource = fs.readFileSync(fullPath);
//   const { content, data } = matter(mdxSource);

//   if (!fullPath) {
//     console.warn("No MDX file found for slug");
//   }

//   return {
//     props: {
//       mdxHtml: ReactDOM.renderToStaticMarkup(
//         <MDX components={components}>{content}</MDX>
//       ),
//       frontMatter: data || {},
//     },
//   };
// }

export async function getStaticProps({ params: { tagSlug } }) {
  // const foo = getSortedPostsData(tagSlug);
  return {
    props: {
      foo: [],
    },
  };
}

// export default components.PostPage;

export default function Tag({ foo }) {
  return (
    <main>
      {foo.length
        ? foo.map(({ title }) => <li key={title}>{title}</li>)
        : false}
    </main>
  );
}
