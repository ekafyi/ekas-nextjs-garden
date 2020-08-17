/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

// double arrow function iz hard. see: https://stackoverflow.com/a/54839755
// const getHeading = (tag) => ({ id, children, ...props }) => {
//   if (!id) return <Styled.h2 {...props} />;
//   return (
//     <Styled.h2 id={id} {...props}>
//       <a href={`#${id}`}>{children}</a>
//     </Styled.h2>
//   );
// };

export default function getHeading(tag) {
  function HeadingEl({ tag, ...props }) {
    switch (tag) {
      case "h2":
        return <Styled.h2 {...props} />;
      case "h3":
        return <Styled.h3 {...props} />;
      case "h4":
        return <Styled.h4 {...props} />;
      case "h5":
        return <Styled.h5 {...props} />;
      default:
        return <Styled.h2 {...props} />; // fallback to h2
    }
  }
  return function AnchorHeading({ id, children, ...props }) {
    if (!id) return <HeadingEl tag={tag} {...props} />;
    return (
      <HeadingEl tag={tag} id={id} {...props}>
        <a href={`#${id}`}>{children}</a>
      </HeadingEl>
    );
  };
}
