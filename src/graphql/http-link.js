import { HttpLink } from 'apollo-link-http';
import fetch from 'unfetch';

export default new HttpLink({
  uri: '/graphql',
  credentials: 'include',
  fetch,
});
