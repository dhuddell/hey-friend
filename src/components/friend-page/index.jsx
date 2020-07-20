import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FRIEND_QUERY } from '../../graphql/queries';
import {
  FriendContent,
  AppLoading,
  AppError,
  AuthRedirect,
} from '..';

const FriendPage = (props) => {
  const { username, friendId } = props.match.params;

  const localUsername = localStorage.getItem('username');
  const token = localStorage.getItem('token') || null;
  if (!localUsername || !token || (localUsername !== username)) return <AuthRedirect />;

  const { data, error, loading } = useQuery(FRIEND_QUERY, {
    variables: { username, friendId },
    errorPolicy: 'all',
  });
  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;

  return (
    <Fragment>
      <FriendContent
        friend={data.friend}
        username={username}
        friendId={friendId}
      />
    </Fragment>
  );
};

export default FriendPage;
