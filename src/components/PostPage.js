/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { SEO, Nav } from "components";

const PostPage = ({ mdxHtml, frontMatter }) => {
  // TODO if error (if !frontMatter || !mdxHtml)
  return (
    <>
      <SEO title={frontMatter.title} />
      <main>
        <Nav />
        <h1 sx={{ mt: [4, null, 8, 12], mb: [4, null, 8] }}>
          {frontMatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
      </main>
    </>
  );
};

export default PostPage;
