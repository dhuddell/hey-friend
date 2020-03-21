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
    // assuming they are GQL errors
    const e = error.graphQLErrors[0];
    console.log('GQL Error on load: ', e.message); // eslint-disable-line
    return <AppError errors={e.message} />;
  }

  return (
    <Fragment>
      {/* <FriendCreationComponent showModal={this.showModal} /> */}
      <FriendContent
        friend={data.friend}
        username={username}
        name={data.friend.name}
        id={id}
        goalSetCollection={data.friend.goalSetCollection}
      />
    </Fragment>
  );
};

export default Friend;
