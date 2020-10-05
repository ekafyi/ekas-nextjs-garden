/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import useWebShare from "react-use-web-share";
import { config } from "../../../site.config.yml";
import { getCanonical } from "../../utils/get-meta";
import { getTwitterUrl } from "../../utils/social";

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

  const [isCopied, setCopied] = useState(false);

  const { isSupported, loading, share } = useWebShare();

  // TODO get twitter text
  // use excerpt kalo ada, otherwise use title

  return (
    <div sx={{ variant: "components.note.ctaShare" }}>
      <span className="label">share:</span>
      <div>
        <a
          href={getTwitterUrl("wawuwo", url)}
          target="_blank"
          rel="external noopener"
        >
          tweet
        </a>
        &nbsp;|&nbsp;
        <CopyButton
          isCopied={isCopied}
          onClick={(e) => {
            if (navigator.clipboard !== undefined) {
              navigator.clipboard.writeText(url);
              setCopied(true);
            }
          }}
        />
        {!loading && isSupported ? (
          <>
            &nbsp;|&nbsp;
            <button
              onClick={(e) => {
                share({
                  title: "judul post",
                  text: "custom text",
                  url,
                });
                // }
              }}
              aria-label="Open device share menu"
            >
              more...
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
