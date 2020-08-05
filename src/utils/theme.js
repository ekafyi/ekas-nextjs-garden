export default {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#111",
    background: "#fff",
    primary: "tomato",
    secondary: "#3f3f3f",
    muted: "#696969", // nice nice nice. also passes WCAG AA contrast.
    highlight: "#9f9f9f",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "tomato",
      },
    },
  },
  fonts: {
    body: "Silom, monospace",
    heading: "Silom, monospace",
    monospace: "Silom, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 2,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      borderColor: "text",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid",
      },
    },
    th: {
      backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
  buttons: {
    outlined: {
      color: "text",
      textDecoration: "none",
      border: "1px solid currentColor",
      borderRadius: 4,
      px: 3,
      py: 2,
      "svg, path": {
        fill: "currentColor",
      },
    },
    withIcon: {
      variant: "buttons.outlined",
      display: "grid",
      gap: "14px",
      gridTemplateColumns: "auto auto",
      alignSelf: "flex-start",
      alignItems: "self-end",
    },
  },
  links: {
    snippet: {
      fontSize: [3, 4],
      color: "text",
      textDecoration: "none",
    },
  },
  text: {
    date: {
      snippet: {
        fontSize: 1,
        opacity: 0.6,
      },
    },
  },
};
