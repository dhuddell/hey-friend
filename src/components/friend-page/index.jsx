import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { FRIEND_QUERY } from '../../graphql/queries';
import {
  // FriendCreationComponent,
  FriendContent,
  AppLoading,
  AppError,
} from '..';

const FriendPage = (props) => {
  const { username, friendId } = props.match.params;

  const userLoggedIn = localStorage.getItem('username') === username;
  if (!userLoggedIn) {
    alert('Please log in'); // eslint-disable-line
    return <Redirect to="/login" />;
  }

  const { data, error, loading } = useQuery(FRIEND_QUERY, {
    variables: { username, friendId },
  });
  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;

  return (
    <Fragment>
      {/* <FriendCreationComponent showModal={this.showModal} /> */}
      <FriendContent
        friend={data.friend}
        username={username}
        friendId={friendId}
      />
    </Fragment>
  );
};

export default FriendPage;
