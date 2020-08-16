import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import "../utils/tailwind.css";
// import CodeBlock from "../components/CodeBlock";

// const components = {
//   pre: ({ children }) => <>{children}</>,
//   code: CodeBlock,
// };

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider
        theme={theme}
        // components={components}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
