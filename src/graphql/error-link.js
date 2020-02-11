/* eslint-disable no-console */
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions.code === 'UNAUTHENTICATED') return console.log('Unauthorized');
      return console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    if (networkError.statusCode === '401') {
      console.log('Error: Unauthorized!'); // eslint-disable-line
    }
    console.log(`[Network error]: ${networkError}`); // eslint-disable-line
  }
});

export default errorLink;
