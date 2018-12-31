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

const Home = () => (
  <div>
    <Header />
    <NavMenu />
    <Query query={GetUserQuery}>
      {
        ({ loading, error, data }) => {
          if (loading) return <AppLoading />;
          if (error) return <AppError />;

          return <FriendItems friends={data.user.friends} />;
        }
      }
    </Query>
  </div>
);

export default Home;
