/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Link from "next/link";
import ColorModeSelect from "components/ColorModeSelect";
import Breadcrumb from "./Breadcrumb";
// import Menu from "./Menu";
import * as Icons from "components/icons";

// = = =

export default function Nav({ curPath, showBc = true }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header sx={{ variant: "components.nav.container" }}>
      <div>
        <Icons.Burger
          onClick={toggleMenu}
          className={isMenuOpen ? "is-open" : ""}
        />

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
