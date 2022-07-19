import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { endpoint, prodEndPoint } from '../config';

const link = createHttpLink({
  uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndPoint,
  credentials: 'include',
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      cookie: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(link)]),
  cache: new InMemoryCache(),
});

export default client;
