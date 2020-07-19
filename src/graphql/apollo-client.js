import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import httpLink from './http-link';
import errorLink from './error-link';
import authLink from './auth-link';
import { ApolloLink } from 'apollo-link';

const httpClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default httpClient;
