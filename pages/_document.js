import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { AppRegistry } from 'react-native-web';

let index = 0;

// Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.
const normalizeNextElements = `
  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    overscroll-behavior: none;
  }
  body > div:first-child,
  #__next {
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main);
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const page = renderPage();
    const styles = [
      <style
        key={index++}
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement(),
    ];
    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <title>InfiniDraw</title>
          <meta name="viewport" content="user-scalable=no, width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
