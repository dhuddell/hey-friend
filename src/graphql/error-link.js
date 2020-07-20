import { onError } from 'apollo-link-error';

const errorLink = onError(({ response, graphQLErrors }) => {
  // add networkError handling

  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions.code === 'UNAUTHENTICATED') return console.log('Unauthorized');
      console.log([`ERROR_LINK: [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`]);
    });
  }

  console.log('ERROR_LINK: Unknown');
});

export default errorLink;
