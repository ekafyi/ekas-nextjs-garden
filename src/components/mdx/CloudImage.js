/** @jsx jsx */
import { jsx } from "theme-ui";
import { useImage } from "use-cloudinary";

// TODO [low priority] refactor for srcset/sizes
// https://cloudinary.com/blog/responsive_images_with_srcset_sizes_and_cloudinary
// https://cloudinary.com/documentation/javascript_integration
// https://cloudinary.com/documentation/react_integration

export default function CloudImage({
  publicId,
  transformations,
  width,
  height,
  cloudName,
  alt,
}) {
  const {
    generateUrl,
    blurredPlaceholderUrl,
    url,
    isError,
    error,
    ref,
    supportsLazyLoading,
    inView,
  } = useImage({ cloudName });

  React.useEffect(() => {
    generateUrl({
      publicId,
      transformations: {
        width,
        height,
        ...transformations,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicId, height, width, transformations]);

  if (isError) return <p>{error.message}</p>;

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      // sx={{ my: [8, null, 12], mx: "auto" }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `no-repeat url(${blurredPlaceholderUrl(publicId, width, height)})`, // prettier-ignore
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          src={url}
          loading="lazy"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          alt={alt || ""}
        />
      ) : null}
    </div>
  );
}
