/** @jsx jsx */
import { jsx } from "theme-ui";
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
  const sxStyle = { variant: `components.mdx.${tag}` };
  return function AnchorHeading({ id, children, ...props }) {
    if (!id) return <tag sx={sxStyle} {...props} />;
    return (
      <tag sx={sxStyle} id={id} {...props}>
        <a href={`#${id}`}>
          <icons.Link className="invisible absolute" />
          {children}
        </a>
      </tag>
    );
  };
}
