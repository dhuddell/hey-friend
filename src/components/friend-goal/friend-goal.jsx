import React from 'react';
import PropTypes from 'prop-types';

const FriendGoal = ({ type, target, current }) => (

  <div className={`phone-${type} friend-goal`}>
    <p className="goal-text">{`${target}`}</p>
    <i className={`fa fa-${type} goal-icon`} />
    {/* <i className={`fa fa-caret-up goal-arrow`} /> */}
    <p className="goal-text">{`${current}`}</p>
    {/* <i className={`fa fa-caret-down goal-arrow`} /> */}
  </div>

);

FriendGoal.propTypes = {
  type: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default FriendGoal;
