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
        </Html>
      // </BrowseRouter>
    );
  }
}

export default CustomDocument;
