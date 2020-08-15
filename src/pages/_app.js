import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
// import theme from "../utils/theme";
import theme from "../theme";
import "../utils/tailwind.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
