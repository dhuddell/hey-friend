import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { GetUserQuery } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItems,
} from '..';

const username = 'james';

const Home = () => (
  <div>
    <Query query={GetUserQuery} variables={{ username }}>
      {
        ({ loading, error, data }) => {
          if (loading) return <AppLoading />;
          if (error) {
            if (error.networkError.statusCode === '401') return <Redirect to="/registration" />;
            return <AppError />;
          }

          return <FriendItems friends={data.user.friends} username={username} />;
        }
      }
    </Query>
  </div>
);

export default Home;
