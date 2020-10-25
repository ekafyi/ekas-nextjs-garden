/** @jsx jsx */
import { jsx } from "theme-ui";
import { ogImgWidth, ogImgHeight } from "site.config.yml";

export default function SocialImgPage({
  title = "eka.fyi",
  desc = "Eka’s notes tagged #gatsby, #jamstack",
  path = "",
}) {
  return (
    <div
      sx={{
        width: ogImgWidth,
        height: ogImgHeight,
        backgroundColor: "background",
        color: "text",
        p: 8,
      }}
    >
      <h1
        sx={{
          fontWeight: "bold",
          fontSize: 80,
          mb: 8,
          pt: 8,
          borderTop: ".5rem solid",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
      <p sx={{ fontSize: 32 }}>{desc}</p>
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
  const d = query.desc || "lorem ipsum dolor sit amet";
  const p = `eka.fyi/${query.path ?? ""}`;

  return {
    props: {
      title: t,
      desc: d,
      path: p,
    },
  };
};

// 8px = size
/**
repeating-radial-gradient(
	circle at 56% 91%, // offsetX offsetY
	hsl(210.86,100%,27.45%), // color1
	hsl(210.86,100%,27.45%) 8px, // color1 size
	hsl(218.97,87.97%,26.08%) 8px, // color2 size
	hsl(218.97,87.97%,26.08%) 32px // color2 (ratio * size)
)
 */
