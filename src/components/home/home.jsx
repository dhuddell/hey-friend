import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { USER_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItems,
} from '..';
import { LOGIN_USER_CACHE_QUERY } from '../../graphql/cache-queries';

const username = 'ack';

const Home = () => {
  console.log(LOGIN_USER_CACHE_QUERY); // eslint-disable-line
  // console.log(client.readQuery({ loginUser: LOGIN_USER_CACHE_QUERY }));

  return (
    <div>
      <Query query={USER_QUERY} variables={{ username }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <AppLoading />;
            if (error) {
              if (error.graphQLErrors[0] && error.graphQLErrors[0].extensions) {
                // This is ghetto and I need to figure out the error handler in the error link
                const errorCode = error.graphQLErrors[0].extensions.code;
                if (errorCode === 'UNAUTHENTICATED') return <Redirect to="/login" />;
              }
              return <AppError />;
            }

            return <FriendItems friends={data.user.friends} username={username} />;
          }
        }
      </Query>
    </div>
  );
};

export default Home;
