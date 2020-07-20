import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Joyride from 'react-joyride';
import { StepStyles, AddFriendSteps } from '../../onboarding';
import { FRIENDS_QUERY } from '../../graphql/queries';
import {
  AppLoading,
  AppError,
  FriendItem,
  AuthRedirect,
} from '..';

const Home = () => {
  const username = localStorage.getItem('username') || null;
  const token = localStorage.getItem('token') || null;
  if (!username || !token) return <AuthRedirect />;

  const [tourState] = useState(AddFriendSteps);

  const { data, error, loading } = useQuery(FRIENDS_QUERY, {
    variables: { username },
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  const renderAddFriendButton = () => (
    <div className="home-add-to-friend-wrapper">
      <Joyride
        steps={tourState.steps}
        locale={{ last: 'Done' }}
        continuous
        styles={StepStyles}
      />
      <button className="btn btn-primary home-add-to-friend">
        <Link className="link-no-style" to="/add-friend">Add a friend!</Link>
      </button>
    </div>
  );

  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;

  return (
    <div className="friend-items content-wrapper">
      {
        data.friends?.length
          ? data.friends.map((friend) =>
            <FriendItem friend={friend} key={friend.name} username={username} />)
          : renderAddFriendButton()
      }
    </div>
  );
};

export default Home;
