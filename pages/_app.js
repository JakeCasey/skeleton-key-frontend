import App from 'next/app';
import Page from '../components/Page';

import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';

let isProduction = process.env.NODE_ENV === 'production';

import '../public/static/tailwind.css';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    //this exposes the query to the user

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <DefaultSeo {...SEO} />
        {isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-XMGLZPVXE3"
              onError={(e) => {
                console.error('Script failed to load', e);
              }}
            ></Script>
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              onError={(e) => {
                console.error('Script failed to load', e);
              }}
              dangerouslySetInnerHTML={{
                __html: `
               window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XMGLZPVXE3');
            `,
              }}
            ></Script>
          </>
        )}

        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
