import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem } from '..';


const FriendItems = ({ friends, username }) => (
  <div className="friend-items content-wrapper">
    {friends.map((data) => <FriendItem data={data} key={data.friendId} username={username} />)}
  </div>
);

FriendItems.propTypes = {
  friends: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default FriendItems;
