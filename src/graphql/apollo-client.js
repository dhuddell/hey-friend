import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import httpLink from './http-link';
import errorLink from './error-link';

const link = ApolloLink.from([errorLink, httpLink]);
const httpClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default httpClient;
