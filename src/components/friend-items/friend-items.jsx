import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem } from '..';


const FriendItems = ({ friends }) => (
  <div className="friend-items content-wrapper">
    {friends.map((data) => <FriendItem data={data} key={data.id} />)}
  </div>
);

FriendItems.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendItems;
