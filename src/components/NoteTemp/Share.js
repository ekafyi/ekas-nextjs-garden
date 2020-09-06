/** @jsx jsx */
import { jsx } from "theme-ui";

export default function Share() {
  return (
    <div sx={{ variant: "components.note.ctaShare" }}>
      <span className="label">share:</span>
      <div>
        <a href="#">tweet</a> | <a href="#">copy link</a>
      </div>
    </div>
  );
}
