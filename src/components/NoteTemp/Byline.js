/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Byline() {
  return (
    <div sx={{ variant: "components.note.byline" }}>
      <div
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "muted",
          mr: 2,
        }}
      />
      <strong sx={{ fontSize: 2, mr: 3 }}>Eka</strong>
      <span sx={{ fontSize: 1, color: "mutedFg" }}>
        20 Aug 2020&nbsp;
        {/* <em>updated 24 Aug 2020</em> */}
      </span>
    </div>
  );
}
