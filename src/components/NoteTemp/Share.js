/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { config } from "../../../site.config.yml";
import { getCanonical } from "../../utils/get-meta";

// = = =
// CopyButton
// = = =

const COPY_BTN_TEXT = "copy link";
const COPIED_BTN_TEXT = "copied ✓";

function CopyButton({ isCopied = false, ...props }) {
  return (
    <button {...props}>{isCopied ? COPIED_BTN_TEXT : COPY_BTN_TEXT}</button>
  );
}

// = = =

export default function Share({ path }) {
  const url = getCanonical(path, config.baseUrl);
  console.log("url ", url);

  const [isCopied, setCopied] = useState(false);

  return (
    <div sx={{ variant: "components.note.ctaShare" }}>
      <span className="label">share:</span>
      <div>
        <a href="#">tweet</a> | {/* <button type="button">copy link</button> */}
        <CopyButton
          isCopied={isCopied}
          onClick={(e) => {
            navigator.clipboard.writeText(url);
            setCopied(true);
          }}
        />
      </div>
    </div>
  );
}
