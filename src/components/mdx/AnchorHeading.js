/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import * as icons from "components/icons";

// double arrow function iz hard. see: https://stackoverflow.com/a/54839755
// const getHeading = (tag) => ({ id, children, ...props }) => {
//   if (!id) return <h2 {...props} />;
//   return (
//     <h2 id={id} {...props}>
//       <a href={`#${id}`}>{children}</a>
//     </h2>
//   );
// };

export default function getHeading(tag) {
  function HeadingEl({ tag, ...props }) {
    switch (tag) {
      case "h2":
        return <h2 {...props} />;
      case "h3":
        return <h3 {...props} />;
      case "h4":
        return <h4 {...props} />;
      case "h5":
        return <h5 {...props} />;
      default:
        return <h2 {...props} />; // fallback to h2
    }
  }

  const sxStyle = { variant: `components.mdx.${tag}` };
  return function AnchorHeading({ id, children, ...props }) {
    if (!id) return <HeadingEl tag={tag} sx={sxStyle} {...props} />;
    return (
      <HeadingEl tag={tag} sx={sxStyle} id={id} {...props}>
        <a href={`#${id}`}>
          <icons.Link className="invisible absolute" />
          {children}
        </a>
      </HeadingEl>
    );
  };
}
