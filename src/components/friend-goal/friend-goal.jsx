import React from 'react';

const FriendGoal = ({ type, className = '', target = '0', current = '0' }) => (
  <div className={`${type}-goal friend-goal ${className}`}>
    <div className="target-goal-text-container">
      <p className="target-goal-text goal-text">{target}</p>
    </div>
    <i className={`fa fa-${type} goal-icon`} />
    <div className="current-goal-container">
      <div className="current-goal-value">
        <p className="current-goal-text goal-text">{`${current}`}</p>
      </div>
      <div className="current-goal-stepper">
        <div className="goal-arrow">
          <i className={'fa fa-caret-up'} />
        </div>
        <div className="goal-arrow">
          <i className={'fa fa-caret-down'} />
        </div>
      </div>
    </div>
  </div>
);
export default FriendGoal;
