/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import ColorModeSelect from "components/ColorModeSelect";

import * as icons from "components/icons";

export default function TempNoteHeader() {
  return (
    <nav sx={{ variant: "components.note.nav" }}>
      <div>
        <button sx={{ mr: 3 }}>☰ menu</button>
        <Link href="/" passHref>
          <a>eka.fyi</a>
        </Link>
      </div>
      <div>
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="Github"
        >
          <icons.Gh />
        </a>
        <ColorModeSelect />
      </div>
    </nav>
  );
}
