/** @jsx jsx */
import { jsx } from "theme-ui";
import { CircleText } from "src/components/graphics";

const TITLE_SX = {
  fontSize: [16, 19, null, 20],
  fontWeight: 800,
  color: "transparent",
  WebkitTextStroke: "2px #263238",
  textShadow: "0.05em 0.075em hsla(186, 100%, 55%, 33%)",
  display: "block",
  textAlign: "center",
  mt: -4,
  ".dot": { color: "menuFg" },
};

const SUBTITLE_SX = {
  fontSize: 0,
  textAlign: "center",
  backgroundColor: ["menuBg", "transparent"],
  mt: [1, 0],
};

const CIRCLE_SX = {
  mx: "auto",
  letterSpacing: "0.25em",
  transform: "rotate(61deg)",
};

export default function RestaurantMenuHeader() {
  return (
    <>
      <div sx={{ height: "2rem", mt: -6 }} aria-label="menu">
        <CircleText size={120} text="menu" sx={CIRCLE_SX} />
      </div>
      <strong sx={TITLE_SX}>
        eka<span className="dot">.</span>fyi
      </strong>
      <em sx={SUBTITLE_SX}>
        Eka’s personal site &amp; digital garden
        <br />
        est. 2020
      </em>
    </>
  );
}
