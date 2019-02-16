import React from 'react';
import PropTypes from 'prop-types';

const FriendGoal = ({ type, target = 0, current = 0 }) => {
  const typeIcon = type === 'text' ? 'comment' : type;
  return (
    <div className={`${type}-goal friend-goal`}>
      <p className="target-goal-text goal-text">{`${target}`}</p>
      <i className={`fa fa-${typeIcon} goal-icon`} />
      {/* <i className={`fa fa-caret-up goal-arrow`} /> */}
      <p className="current-goal-text goal-text">{`${current}`}</p>
      {/* <i className={`fa fa-caret-down goal-arrow`} /> */}
    </div>
  );
};

FriendGoal.propTypes = {
  type: PropTypes.string.isRequired,
  target: PropTypes.string,
  current: PropTypes.string,
};

export default FriendGoal;
