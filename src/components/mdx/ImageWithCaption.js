import Image from "./Image";

export default function ImageWithCaption({ caption, smallCaption, ...props }) {
  return (
    <figure>
      <Image {...props} />
      {(caption || smallCaption) && (
        <figcaption>
          {caption || ""}
          {caption && smallCaption && " "}
          {smallCaption && <small>{smallCaption}</small>}
        </figcaption>
      )}
    </figure>
  );
}
