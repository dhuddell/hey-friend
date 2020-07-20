import { v4 as uuidv4 } from 'uuid';

export default () => {
  const hasCookie = document.cookie.includes('returningUserId');

  if (!hasCookie) {
    const userCookieExpiration = new Date();
    userCookieExpiration.setFullYear(userCookieExpiration.getFullYear() + 10);
    document.cookie = `${escape('returningUserId')}=${escape(uuidv4())};
      expires=${userCookieExpiration};`;
  }
};
