/** @jsx jsx */
import { jsx } from "theme-ui";
import Markdown from "markdown-to-jsx";
import { Link as LinkSvg } from "src/components/icons";
import { Coffee, CircleText } from "src/components/graphics";

function CoffeeWithText() {
  return (
    <>
      <Coffee />
      <strong sx={{ variant: "media.ogImg.cupText" }}>
        <span>eka</span>
        <span>.fyi</span>
      </strong>
    </>
  );
}

function CustomTagText({ tagText = "" }) {
  if (!tagText) return false;

  let circleEl;
  switch (tagText) {
    case "TAG_TIPS":
      circleEl = (
        <CircleText
          // text="console logs · coding tips & snippets" // TODO [low priority] revamp with custom graphics
          text="coding tips & snippets"
          sx={{ transform: "rotate(-20deg)" }}
        />
      );
      break;
    case "TAG_LEARN":
      circleEl = (
        <CircleText
          text="coffee-fueled learning notes"
          sx={{ transform: "rotate(-34deg)" }}
        />
      );
      break;
    case "TAG_RESOURCES":
      circleEl = (
        <CircleText
          text="resources & bookmarks"
          sx={{ transform: "rotate(-30deg)" }}
        />
      );
      break;
    default:
      return false;
  }
  let textSx = { fontSize: 32, letterSpacing: 1, wordSpacing: 3 };

  // not needed now, for use with custom graphics.
  // if (tagText === "TAG_TIPS") textSx = { fontSize: 32, letterSpacing: 0, wordSpacing: 1 }; // prettier-ignore

  return (
    <div sx={{ position: "absolute", right: -3, bottom: 0, text: textSx }}>
      {circleEl}
    </div>
  );
}

const DEFAULT_DESC =
  "freshly brewed, organic web development notes (with bonus tracks). html, css, js, a11y, etc.";

const DEFAULT_TITLE = (
  <>
    Eka’s personal site
    <br />& digital garden
  </>
);

export default function SocialImgPage({ title, desc, path, tagText }) {
  return (
    <div sx={{ variant: "media.ogImg.card" }}>
      <>
        <h1 sx={{ variant: "media.ogImg.title" }}>{title || DEFAULT_TITLE}</h1>
        <Markdown sx={{ variant: "media.ogImg.desc" }}>
          {desc || DEFAULT_DESC}
        </Markdown>
        <div sx={{ variant: "media.ogImg.url" }}>
          <LinkSvg width={22} height={22} /> {path}
        </div>
        <CustomTagText tagText={tagText} />
        <div sx={{ variant: "media.ogImg.decor" }}>
          <CoffeeWithText />
        </div>
      </>
      <style jsx global>{`
        body {
          background: #fff !important;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const t = query.title || "";
  const d = query.desc || DEFAULT_DESC;
  const p = `eka.fyi${query.path ?? ""}`;
  const tagText = query.tagText || null;

  return {
    props: {
      title: t,
      desc: d,
      path: p,
      tagText,
    },
  };
};
