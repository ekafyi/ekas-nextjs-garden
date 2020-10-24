import Image from "./Image";

export default function ImageWithCaption({ caption, smallCaption, ...props }) {
  return (
    <figure>
      <Image {...props} />
      {(caption || smallCaption) && (
        <figcaption>
          {caption || ""}
          {smallCaption && <small>{smallCaption}</small>}
        </figcaption>
      )}
    </figure>
  );
}
