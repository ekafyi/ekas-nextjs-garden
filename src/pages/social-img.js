/** @jsx jsx */
import { jsx } from "theme-ui";
import Markdown from "markdown-to-jsx";

// ? TEMPORARY
// const SAMPLE_DESC = "Eka’s note tagged **#gatsby**, **#jamstack**";
const SAMPLE_DESC = "\\#puppeteer · #nextjs · #jamstack";
//

export default function SocialImgPage({ title, desc, path }) {
  return (
    <div sx={{ variant: "media.ogImg.card" }}>
      <h1 sx={{ variant: "media.ogImg.title" }}>{title}</h1>
      <Markdown sx={{ variant: "media.ogImg.desc" }}>{desc}</Markdown>
      <div sx={{ variant: "media.ogImg.url" }}>🔗&nbsp; {path}</div>
      <style jsx global>{`
        body {
          background: #fff !important;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const t = query.title || "eka.fyi";
  const d = query.desc || SAMPLE_DESC;
  const p = `eka.fyi${query.path ?? ""}`;

  return {
    props: {
      title: t,
      desc: d,
      path: p,
    },
  };
};
