import Document, { Html, Head, Main, NextScript } from 'next/document';
import { BrowserRouter } from 'react-router-dom';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // <BrowseRouter>
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>

        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport"></meta>

        <meta content="yes" name="apple-mobile-web-app-capable"></meta>

        <meta content="black" name="apple-mobile-web-app-status-bar-style"></meta>

        <meta content="telephone=no" name="format-detection"></meta>
      </Html>
      // </BrowseRouter>
    );
  }
}

export default CustomDocument;
