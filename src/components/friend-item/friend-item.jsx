import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import percentMapper from '../../helpers/percent-mapper';

class FriendItem extends Component {
  render() {
    const { name, icon, id, friendScore } = this.props.details;

    return (
      <Link to={`/friends/${id}`} className="friend-wrapper">
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
  }
}

FriendItem.propTypes = {
  details: PropTypes.object,
};

export default FriendItem;
