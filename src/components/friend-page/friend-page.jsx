import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { FRIEND_QUERY } from '../../graphql/queries';
import {
  // FriendCreationComponent,
  FriendContent,
  AppLoading,
  AppError,
} from '..';

const Friend = (props) => {
  const { username, name } = props.match.params;

  const userLoggedIn = localStorage.getItem('username') === username;

  if (!userLoggedIn) {
    alert('Need to auth!'); // eslint-disable-line
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Query query={FRIEND_QUERY} variables={{ username, name }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <AppLoading />;
            if (error) return <AppError />;

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
          }
        }
      </Query>
    </div>
  );
};

export default Friend;
