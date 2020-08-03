import { SEO, Header } from "components";

const PostPage = ({ mdxHtml, frontMatter }) => {
  return (
    <>
      <SEO title={frontMatter.title} />
      <main>
        <Header />
        <h1>{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
      </main>
    </>
  );
};

export default PostPage;
