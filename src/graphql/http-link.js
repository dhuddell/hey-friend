import { HttpLink } from 'apollo-link-http';
import fetch from 'unfetch';

export default new HttpLink({
  uri: 'http://localhost:4000/graphql',
  // credentials: 'include',
  fetch,
});
