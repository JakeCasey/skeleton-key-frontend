import Page from '../components/Page';

import { ApolloProvider } from '@apollo/client';
import client from '../lib/withData.js';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';

let isProduction = process.env.NODE_ENV === 'production';

import '../public/static/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
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

export default App;
