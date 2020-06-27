import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import { useToasts } from 'react-toast-notifications';
import { FRIENDS_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItems,
} from '..';

const Home = () => {
  const username = localStorage.getItem('username') || null;
  const { addToast } = useToasts();

  if (!username) {
    addToast('Need to auth!', {
      appearance: 'error',
      // currently broken.
      onDismiss: () => <Redirect to="/login" />,
    });
    alert('Need to auth!'); // eslint-disable-line
    return <Redirect to="/login" />;
  }

  const { data, error, loading } = useQuery(FRIENDS_QUERY, {
    variables: { username },
  });

  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;

  return <FriendItems friends={data.friends} username={username} />;
};

export default Home;
