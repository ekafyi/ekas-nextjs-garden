/** @jsx jsx */
import { jsx } from "theme-ui";
// import { useState, useEffect } from "react";

export default function Image({ src, alt, figcaption, ...props }) {
  return <img src={src} alt={alt || ""} loading="lazy" {...props} />;
}
