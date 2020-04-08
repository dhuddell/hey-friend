import React from 'react';
import { Link } from 'react-router-dom';

const FriendItem = ({ data, username }) => {
  const { name, icon, friendId, friendScore } = data;

  const friendScoreStyle = {
    height: `${friendScore}%`,
    width: `${friendScore}%`,
    fontSize: `${(friendScore / 100 * 3)}em`,
  };

  return (
    <Link to={`/${username}/friends/${friendId}`} className="friend-wrapper">
      <div className="friend-item">
        <p className="friend-name">{name}</p>
        <div className="icon-container">
          <div className="icon-outer-circle">
            <div
              className={'inner-icon-container'}
              style={friendScoreStyle}
            >
              <i className={`fa ${icon} friend-icon inner-friend-icon`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendItem;
