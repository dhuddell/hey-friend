import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: ${message}`) // eslint-disable-line
      // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    if (networkError.statusCode === '401') {
      console.log('Error: Unauthorized!'); // eslint-disable-line
    }
    console.log(`[Network error]: ${networkError}`); // eslint-disable-line
  }
});

export default errorLink;
