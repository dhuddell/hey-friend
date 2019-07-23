import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import percentMapper from '../../helpers/percent-mapper';

const FriendItem = ({ data, username }) => {
  const { name, icon, id, friendScore } = data;

  return (
    <Link to={`/${username}/friends/${id}`} className="friend-wrapper">
      <div className="friend-item">
        <p className="friend-name">{name}</p>
        <div className="icon-container">
          <div className="icon-outer-circle">
            <div className={`inner-icon-container ${percentMapper(friendScore)}`}>
              <i className={`fa ${icon} friend-icon inner-friend-icon`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

FriendItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    friendScore: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
  username: PropTypes.string,
};

export default FriendItem;
