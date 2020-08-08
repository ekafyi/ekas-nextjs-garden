import { SEO } from "components";

const PostPage = ({ mdxHtml, frontMatter }) => {
  // TODO if error (if !frontMatter || !mdxHtml)
  return (
    <>
      <SEO title={frontMatter.title} />
      <main>
        <h1>{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
      </main>
    </>
  );
};

export default PostPage;
