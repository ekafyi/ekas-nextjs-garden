/** @jsx jsx */
import { jsx } from "theme-ui";

export default function SocialImgPage({
  title = "eka.fyi",
  desc = "Eka’s notes tagged #gatsby, #jamstack",
  path = "",
}) {
  return (
    <div sx={{ variant: "media.ogImg.card" }}>
      <h1 sx={{ variant: "media.ogImg.title" }}>{title}</h1>
      <p sx={{ variant: "media.ogImg.desc" }}>{desc}</p>
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
