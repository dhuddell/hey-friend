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

const Friend = (props) => {
  const { username, id } = props.match.params;

  const userLoggedIn = localStorage.getItem('username') === username;

  if (!userLoggedIn) {
    alert('Need to auth!'); // eslint-disable-line
    return <Redirect to="/login" />;
  }

  const { data, error, loading } = useQuery(FRIEND_QUERY, {
    variables: { username, id },
  });

  if (loading) return <AppLoading />;
  if (error) {
    console.log('Error on load: ', JSON.stringify(error)) // eslint-disable-line
    return <AppError />;
  }

  return (
    <Fragment>
      {/* <FriendCreationComponent showModal={this.showModal} /> */}
      <FriendContent
        friend={data.friend}
        username={username}
        name={name}
        goalSetCollection={data.friend.goalSetCollection}
      />
    </Fragment>
  );
};

export default Friend;
