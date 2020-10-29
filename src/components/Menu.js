/** @jsx jsx */
import { jsx } from "theme-ui";
//import { useState, useEffect } from "react";

export default function Menu({ ...props }) {
  return (
    <nav
      aria-label="Site navigation"
      aria-live="assertive"
      sx={{ variant: "components.nav.menu" }}
      {...props}
    >
      <div className="flex flex-col">
        <a href="#">posts</a>
        <a href="#">notes</a>
        <a href="#">talks</a>
        <a href="#">about</a>
      </div>
    </nav>
  );
}
