import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import httpLink from './http-link';
import errorLink from './error-link';
import authLink from './auth-link';

const httpClient = new ApolloClient({
  link: authLink.concat(httpLink, errorLink),
  cache: new InMemoryCache(),
});

export default httpClient;
