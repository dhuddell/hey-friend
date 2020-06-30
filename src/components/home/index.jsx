import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, Redirect } from 'react-router-dom';

import { useToasts } from 'react-toast-notifications';
import { FRIENDS_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItem,
} from '..';

const Home = () => {
  const username = localStorage.getItem('username') || null;
  const { addToast } = useToasts();

  if (!username) {
    addToast('Please sign in', {
      appearance: 'error',
      autoDismissTimeout: 2500,
      autoDismiss: true,
    });

    return <Redirect to="/login" />;
  }

  const { data, error, loading } = useQuery(FRIENDS_QUERY, {
    variables: { username },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;

  return (
    <div className="friend-items content-wrapper">
      {
        data.friends.length
          ? data.friends.map((friend) =>
            <FriendItem friend={friend} key={friend.name} username={username} />)
          : <button className="btn btn-primary">
            <Link className="link-no-style" to="/add-friend">Add a friend!</Link>
          </button>
      }
    </div>
  );
};

export default Home;
