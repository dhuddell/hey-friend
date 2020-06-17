import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import { FRIENDS_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItems,
} from '..';

const Home = () => {
  const username = localStorage.getItem('username') || null;

  if (!username) {
    alert('Need to auth!'); // eslint-disable-line
    return <Redirect to="/login" />;
  }

  const { data, error, loading } = useQuery(FRIENDS_QUERY, {
    variables: { username },
  });

  if (loading) return <AppLoading />;
  if (error) {
    const e = error.graphQLErrors[0];
    if (e) console.warn('GQL Error on load: ', e.message);
    else console.warn('Network Error on load: ', error.networkError.message);
    return <AppError errors={error} />;
  }

  return <FriendItems friends={data.friends} username={username} />;
};

export default Home;
