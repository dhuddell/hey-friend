import { HttpLink } from 'apollo-link-http';

export default new HttpLink({
  uri: '/graphql',
  credentials: 'include',
  fetch,
});
