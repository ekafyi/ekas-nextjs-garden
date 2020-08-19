/** @jsx jsx */
import { jsx } from "theme-ui";

export default function SkipLink({ href = "#main", children }) {
  return (
    <a href={href} sx={{ variant: "links.skip" }}>
      {children || "Skip to main content"}
    </a>
  );
}
