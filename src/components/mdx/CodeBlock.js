/** @jsx jsx */
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";
import { jsx, Styled } from "theme-ui";
// import theme from "prism-react-renderer/themes/nightOwl"; // Use theme from @theme-ui/prism in theme.styles instead of here.

const getShouldHighlightLine = (hl) => {
  if (hl) {
    const lineNumbers = rangeParser(hl);
    return (index) => lineNumbers.includes(index + 1);
  }
  return () => false;
};

const getAriaLabel = (lang = "", title = "") => {
  return `${lang} code block ${title ? `for ${title}` : ""}`;
};

const containerSx = { variant: "components.mdx.blockCode.container" };
const highlightSx = { variant: "components.mdx.blockCode.highlight" };
const langSx = { variant: "components.mdx.blockCode.lang" };
const titleSx = { variant: "components.mdx.blockCode.title" };

const langTw = "absolute right-0";
const titleTw = "py-2 -mb-2";

export default function CodeBlock({
  children,
  className: outerClassName,
  title,
  hl,
  ...props
}) {
  let language;
  if (typeof outerClassName !== "undefined") {
    [language] = outerClassName.replace(/language-/, ``).split(` `);
  }
  if (typeof children !== `string`) return null; // MDX will pass in the code string as children
  const shouldHighlightLine = getShouldHighlightLine(hl);
  return (
    <div
      className="eka-cb"
      sx={containerSx}
      aria-label={getAriaLabel(language, title)}
    >
      {language && (
        <div sx={langSx} className={langTw} aria-hidden="true">
          {language}
        </div>
      )}
      {title && (
        <div sx={titleSx} className={titleTw} aria-hidden="true">
          {title}
        </div>
      )}
      <Highlight
        {...defaultProps}
        {...props}
        code={children.trim()}
        language={language}
        theme={undefined} // theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Styled.pre
            className={`${outerClassName} ${className}`}
            style={style}
          >
            {tokens.map((line, index) => (
              <div
                key={index}
                {...getLineProps({ line, key: index })}
                sx={shouldHighlightLine(index) ? highlightSx : undefined}
              >
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                    // https://github.com/system-ui/theme-ui/pull/721
                    sx={token.empty ? { display: `inline-block` } : undefined}
                  />
                ))}
              </div>
            ))}
          </Styled.pre>
        )}
      </Highlight>
    </div>
  );
}
