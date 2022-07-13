import Document, { Html, Head, Main, NextScript } from 'next/document';
import { analyticsHeadTag, analyticsBodyTag } from '../config';
import Script from 'next/script';

let isProduction = process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="">
        <Head>{this.props.styleTags}</Head>
        <body>
          {isProduction && (
            <noscript
              dangerouslySetInnerHTML={{ __html: analyticsBodyTag }}
            ></noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
