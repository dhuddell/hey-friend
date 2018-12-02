import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem } from '..';


const FriendItems = ({ friends }) => (
  <div className="friend-items content-wrapper">
    {friends.map((details) => <FriendItem details={details} key={details.id} />)}
  </div>
);

FriendItems.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendItems;
