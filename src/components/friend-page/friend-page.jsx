import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { FRIEND_QUERY } from '../../graphql/queries';
import {
  // FriendCreationComponent,
  FriendContent,
  AppLoading,
  AppError,
} from '..';

const Friend = (props) => {
  const { username, friendId } = props.match.params;

  return (
    <div>
      <Query query={FRIEND_QUERY} variables={{ username, friendId }}>
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
                  friendId={friendId}
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
