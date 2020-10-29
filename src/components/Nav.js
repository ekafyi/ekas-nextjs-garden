/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import Link from "next/link";

import ColorModeSelect from "components/ColorModeSelect";
import Breadcrumb from "./Breadcrumb";
import Menu from "./Menu";
import * as Icons from "components/icons";

// = = =

export default function Nav({ curPath, showBc = true }) {
  const [showMenu, setShowMenu] = useState(false);
  const [openCss, setOpenCss] = useState(false);

  const close = () => {
    setOpenCss(false);
    setTimeout(() => {
      setShowMenu(false);
    }, 50);
  };

  const toggleMenu = () => {
    if (showMenu) {
      close();
    } else {
      setShowMenu(true);
      setTimeout(() => {
        setOpenCss(true);
      }, 50);
    }
  };

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") close();
    };
    if (showMenu) {
      // Disable scroll while menu is open.
      document.body.style.overflow = "hidden";

      // Enable closing menu by clicking outside area _or_ pressing Esc key.
      document.body.addEventListener("click", close);
      window.addEventListener("keyup", closeOnEsc);
      //
    } else document.body.style = null;

    return () => {
      // Clean up listeners.
      document.body.removeEventListener("click", close);
      window.removeEventListener("keyup", closeOnEsc);
    };
  }, [showMenu]);

  return (
    <header sx={{ variant: "components.nav.container" }}>
      <div>
        <Icons.Burger
          onClick={toggleMenu}
          className={showMenu ? "is-open" : ""}
        />
        {showMenu && <Menu className={openCss && showMenu ? "is-open" : ""} />}
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
