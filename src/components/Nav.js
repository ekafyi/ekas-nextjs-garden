/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import ColorModeSelect from "components/ColorModeSelect";

import * as icons from "components/icons";

const getParent = (curPath) => {
  return curPath.split("/")[1];
};

const getPageTitle = (curPath) => {
  return curPath.replace(/-/g, " ").replace(`/${getParent(curPath)}/`, "");
};

export default function Nav({ curPath, hideBc = false }) {
  return (
    <header sx={{ variant: "components.nav.container" }}>
      <div>
        <button aria-label="Open navigation menu">☰ menu&nbsp;</button>
        {!hideBc && (
          <nav sx={{ variant: "components.nav.bc" }} aria-label="Breadcrumb">
            <Link href="/" passHref>
              <a>eka.fyi</a>
            </Link>
            {curPath && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/${getParent(curPath)}`} passHref>
                  <a>{getParent(curPath)}</a>
                </Link>
                <Link href={curPath} passHref>
                  <a aria-current="page" className="sr-only">
                    {getPageTitle(curPath)}
                  </a>
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
      <div>
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on Github"
        >
          <icons.Gh />
        </a>
        <ColorModeSelect />
      </div>
    </header>
  );
}
