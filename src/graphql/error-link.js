/* eslint-disable no-console */
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors.map((err) => err.message));

    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions.code === 'UNAUTHENTICATED')
        return console.log('Unauthorized');

      return console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  return new Error('No freakin clue');
});

export default errorLink;
