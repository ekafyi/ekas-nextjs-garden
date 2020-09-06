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

// const contSx = { variant: "components.code.block.container" };
// const langSx = { variant: "components.code.block.lang" };
// const titleSx = { variant: "components.code.block.title" };
const hlSx = { variant: "components.code.block.hl" };

const contCss = "eka-cblock";
const langCss = "eka-cblock__lang absolute right-0";
const titleCss = "eka-cblock__title py-2 -mb-2";
// const hlCss = "eka-cblock__hl";

export default function CodeBlockOld({
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
    <div className={contCss} aria-label={getAriaLabel(language, title)}>
      {language && (
        <div className={langCss} aria-hidden="true">
          {language}
        </div>
      )}
      {title && (
        <div className={titleCss} aria-hidden="true">
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
            {tokens.map((line, index, className) => (
              <div
                key={index}
                {...getLineProps({ line, key: index })}
                sx={shouldHighlightLine(index) ? hlSx : undefined}
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
