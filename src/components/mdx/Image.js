/** @jsx jsx */
import { jsx } from "theme-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";

const placeholderEl = (
  <div
    className="img-placeholder"
    sx={{
      height: 300,
      backgroundColor: "muted",
      animation: "bgAnim 4s infinite",
    }}
    aria-hidden="true"
  />
);

export default function Image({ src, alt, figcaption, ...props }) {
  return (
    <>
      {/* <img src={src} alt={alt || ""} loading="lazy" {...props} /> */}
      <LazyLoadImage
        src={src}
        alt={alt || ""}
        placeholder={placeholderEl}
        threshold={-200}
        {...props}
      />
    </>
  );
}
