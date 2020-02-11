import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import { USER_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItems,
} from '..';

// NEED TO DECIDE IF GRAPHQL MIDDLEWARE CAN HANDLE THIS COMPLETELY
// const checkToken = () => {
// console.log('user token is:', window.localStorage.getItem('user_token')); // eslint-disable-line
// here we would check localStorage
// hit the db to verify it matches the encrypted token in the database
// then load that shit or reroute to login
// };

const Home = ({ username = 'james' }) => {
  // checkToken();
  const { data, error, loading } = useQuery(USER_QUERY, {
    variables: { username },
  });

  if (loading) return <AppLoading />;
  if (error) {
    if (error.graphQLErrors[0] && error.graphQLErrors[0].extensions) {
      // This is ghetto and I need to figure out the error handler in the error link
      const errorCode = error.graphQLErrors[0].extensions.code;
      if (errorCode === 'UNAUTHENTICATED') return <Redirect to="/login" />;
    }
    return <AppError />;
  }

  return <FriendItems friends={data.user.friends} username={username} />;
};

export default Home;
