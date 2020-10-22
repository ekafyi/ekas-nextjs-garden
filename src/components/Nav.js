/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Link from "next/link";
import ColorModeSelect from "components/ColorModeSelect";

import * as Icons from "components/icons";

const printLastSegment = (path) => {
  return path.split("/")[path.split("/").length - 1];
};

const getCrumbs = (arr) => {
  const result = [arr.join("/")];
  for (let i = -1; i > arr.length * -1; i--) {
    result.push(arr.slice(0, i).join("/"));
  }
  return result.reverse();
};

// = = =

function Breadcrumb({ path }) {
  if (!path.length) return false;

  const pathArr = path.split("/");
  pathArr.shift();
  const crumbs = getCrumbs(pathArr);
  const lastCrumb = crumbs.pop();

  return (
    <>
      {crumbs?.map((crumb) => (
        <Fragment key={crumb}>
          <span aria-hidden="true">/</span>
          <Link href={`/${crumb}`} passHref>
            <a>{printLastSegment(crumb)}</a>
          </Link>
        </Fragment>
      ))}
      {lastCrumb && (
        <Link href={lastCrumb} passHref>
          <a aria-current="page" className="sr-only">
            {printLastSegment(lastCrumb)}
          </a>
        </Link>
      )}
    </>
  );
}

// = = =

export default function Nav({ curPath, showBc = true }) {
  return (
    <header sx={{ variant: "components.nav.container" }}>
      <div>
        <button
          sx={{ variant: "buttons.ham" }}
          aria-label="Open navigation menu"
        >
          menu
        </button>
        {showBc && (
          <nav sx={{ variant: "components.nav.bc" }} aria-label="Breadcrumb">
            <Link href="/" passHref>
              <a>eka.fyi</a>
            </Link>
            {curPath && <Breadcrumb path={curPath} />}
          </nav>
        )}
      </div>
      <div sx={{ variant: "components.nav.icons" }}>
        <a
          href="https://github.com/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on Github"
        >
          <Icons.Gh />
        </a>
        {/* <a
          href="https://dev.to/ekafyi"
          rel="external"
          nofollow="true"
          aria-label="eka on dev.to"
        >
          <Icons.Dev />
        </a> */}
        <ColorModeSelect
          darkElement={<Icons.Moon />}
          lightElement={<Icons.Moon />}
        />
      </div>
    </header>
  );
}
