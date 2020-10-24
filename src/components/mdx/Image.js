/** @jsx jsx */
import { jsx } from "theme-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

export default function Image({ src, alt, figcaption, ...props }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <div
      className="img-container"
      sx={{ variant: "media.container" }}
      aria-hidden={hasLoaded ? undefined : "true"}
    >
      {/* <img src={src} alt={alt || ""} loading="lazy" {...props} /> */}
      <LazyLoadImage
        src={src}
        alt={alt || ""}
        threshold={10}
        effect="opacity"
        afterLoad={() => setHasLoaded(true)}
        {...props}
      />
    </div>
  );
}
