import { getPost } from "src/utils/get-mdx";
import SocialImgFn from "src/pages/api/social-img";

const handler = async (req, res) => {
  const [, slug] = /^([^.]+)(\.png)?$/.exec(req.query.slug);
  const post = getPost(slug, "notes");

  if (post) {
    req.query.title = post.frontMatter.title;
    req.query.desc = "sadsadsa";
    req.query.path = `/notes/${slug}`;
    return SocialImgFn(req, res);
  }
  return res.redirect("/404").end();
};

export default handler;
