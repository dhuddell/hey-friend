import { createHttpLink } from 'apollo-link-http';
import fetch from 'unfetch';

export default createHttpLink({
  uri: `${process.env.SERVE_HEY_FRIEND}`,
  // credentials: 'include',
  fetch,
});
