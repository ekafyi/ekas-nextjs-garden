---
to: "src/components/<%= Name %>.js"
---
<% if(pragma) { %>
/** @jsx jsx */
import { jsx } from "theme-ui";
//import { useState, useEffect } from "react";
<% } else { %>
import { React } from "react";
<% } %>
export default function <%= Name %>({ ...props }) {
  return (
    <div>hello component</div>
  );
}