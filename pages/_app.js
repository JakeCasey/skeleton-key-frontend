import App from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';

import withData from '../lib/withData';
import '../public/static/tailwind.css';
// import { Provider } from 'unstated';

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
      <div>
        <ApolloProvider client={apollo}>
          {/* <Provider> */}
          <Page>
            {' '}
            <Component {...pageProps} />
          </Page>
          {/* </Provider> */}
        </ApolloProvider>
      </div>
    );
  }
}

export default withData(MyApp);
