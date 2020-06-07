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
  if (error) {
    const e = error.graphQLErrors[0];
    if (e) console.log('GQL Error on load: ', e.message);
    else console.log('Network Error on load: ', error.networkError.message);
    return <AppError errors={error} />;
  }

  return (
    <Fragment>
      {/* <FriendCreationComponent showModal={this.showModal} /> */}
      <FriendContent
        friend={data.friend}
        username={username}
        name={data.friend.name}
        friendId={friendId}
        goals={data.friend.goals}
      />
    </Fragment>
  );
};

export default Friend;
