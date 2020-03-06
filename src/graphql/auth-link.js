import { setContext } from 'apollo-link-context';

const authLink = setContext(() => {
  const token = localStorage.getItem('token') || null;
  return { headers: { token } };
});

export default authLink;
