import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import "../utils/tailwind.css";
import NextNProgress from "nextjs-progressbar";
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <NextNProgress color="currentColor" height={2} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
