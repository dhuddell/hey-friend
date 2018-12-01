import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import link from './http-link';

const httpClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default httpClient;
