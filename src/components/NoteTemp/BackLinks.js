/** @jsx jsx */
import { jsx } from "theme-ui";

export default function BackLinks() {
  return (
    <div
      sx={{
        fontSize: 1,
        textAlign: "center",
        // mt: -4, // Use mt:-4, mb:4 if we have other bottomBlock content.
        display: "flex",
        justifyContent: ["space-between", null, null, "center"],
      }}
    >
      <a href="#main" sx={{ variant: "links.backToTop", pr: 2 }}>
        &larr; all <strong>notes</strong>
      </a>
      <a href="#main" sx={{ variant: "links.backToTop", pl: 2 }}>
        &uarr; back to <strong>top</strong>
      </a>
    </div>
  );
}
