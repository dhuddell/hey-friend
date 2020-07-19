import { v4 as uuidv4 } from 'uuid';

export default () => {
  const userCookieExpiration = new Date();
  userCookieExpiration.setFullYear(userCookieExpiration.getFullYear() + 10);
  document.cookie = `${escape('returningUserId')}=${escape(uuidv4())};expires=${userCookieExpiration};`;
};
