/** @jsx jsx */
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";
import { jsx, Styled } from "theme-ui";
import theme from "prism-react-renderer/themes/nightOwl"; // Use theme from @theme-ui/prism in theme.styles instead of here.
import { lang as langStyles } from "../../../taxonomies.yml";

const checkShouldHl = (hl) => {
  if (hl) {
    const lineNumbers = rangeParser(hl);
    return (index) => lineNumbers.includes(index + 1);
  }
  return () => false;
};

const getAriaLabel = (lang = "", title = "") => {
  return `${lang} code block ${title ? `for ${title}` : ""}`;
};

const getSxFoo = (lang) => {
  const hasStyle = Object.keys(langStyles).includes(lang);
  return hasStyle ? { ...langStyles[lang] } : { background: "#ffffff00" };
};

// = = =
// Styles stuff
// = = =

const headerSx = { variant: "components.code.prismHeader" };
const hlSx = { variant: "components.code.prismHl" };

const outerCss = "my-8 rounded";
const preCss = "relative overflow-auto py-4 rounded-b";
const headerCss = "flex justify-between px-4 py-2 rounded-t";

// = = =

export default function CodeBlock({
  children,
  className: outerClassName,
  title,
  hl,
  ...props
}) {
  if (typeof children !== `string`) return null; // MDX will pass in the code string as children

  let language;
  if (typeof outerClassName !== "undefined") {
    [language] = outerClassName.replace(/language-/, ``).split(` `);
  }

  const shouldHl = checkShouldHl(hl);

  const languageEl = (
    <div sx={getSxFoo(language)} className={`px-1 mr-2`} aria-hidden="true">
      {language}
    </div>
  );

  const titleEl = <div aria-hidden="true">{title}</div>;

  return (
    <Highlight
      {...defaultProps}
      {...props}
      code={children.trim()}
      language={language}
      theme={theme} // theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <section
          className={outerCss}
          aria-label={getAriaLabel(language, title)}
        >
          <div sx={headerSx} className={headerCss}>
            <div className="flex">
              {language && languageEl}
              {title && titleEl}
            </div>
            <button>copy?</button>
          </div>
          <Styled.pre className={`${className} ${preCss}`} style={style}>
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  sx={shouldHl(i) ? hlSx : undefined}
                  className={`${getLineProps({ line }).className} px-4`}
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                      sx={token.empty ? { display: `inline-block` } : undefined} // https://github.com/system-ui/theme-ui/pull/721
                    />
                  ))}
                </div>
              );
            })}
          </Styled.pre>
        </section>
      )}
    </Highlight>
  );
}
