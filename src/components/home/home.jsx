import React from 'react';
import { Query } from 'react-apollo';
import { GetUserQuery } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  Header,
  NavMenu,
  FriendItems,
} from '..';

const username = 'james';

const Home = () => (
  <div>
    <Header />
    <NavMenu />
    <Query query={GetUserQuery} variables={{ username }}>
      {
        ({ loading, error, data }) => {
          if (loading) return <AppLoading />;
          if (error) return <AppError />;

          return <FriendItems friends={data.user.friends} username={username} />;
        }
      }
    </Query>
  </div>
);

export default Home;
