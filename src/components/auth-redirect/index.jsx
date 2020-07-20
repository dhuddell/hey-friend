import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';

const AuthRedirect = () => {
  const { addToast } = useToasts();
  const cookieMatch = document.cookie.match('(^|;)\\s*returningUserId\\s*=\\s*([^;]+)');
  const isReturningUser = cookieMatch ? cookieMatch.pop() : '';

  const authMessage = isReturningUser ? 'Please log in' : 'Welcome! Please register';

  addToast(authMessage, {
    appearance: 'error',
    autoDismissTimeout: 2500,
    autoDismiss: true,
  });

  return isReturningUser ? <Redirect to="/login" /> : <Redirect to="/registration" />;
};

export default AuthRedirect;
