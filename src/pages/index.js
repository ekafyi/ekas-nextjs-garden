import { getAllPosts } from "../utils/get-mdx";

import { HomePage } from "components";

export default HomePage;

export async function getStaticProps() {
  return {
    props: {
      allMdx: getAllPosts("posts", "slug"),
    },
  };
}
