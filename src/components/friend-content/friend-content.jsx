import React, { useState } from 'react';
import { ModalConsumer } from '../../modal-context';
import { FriendGoal, Modal } from '..';

const FriendContent = ({
  friend,
  username,
  name,
  goals,
  friendId,
}) => {
  const friendScoreStyle = {
    height: `${friend.friendScore}%`,
    width: `${friend.friendScore}%`,
    fontSize: `${(friend.friendScore / 100 * 3)}em`,
  };

  const [goalState, setGoalState] = useState({ ...goals });
  // MAKE SURE WE HANDLE DISABLING THE DOWN ARROW WHEN VALUE IS 0

  return (
    <div className="content-wrapper">
      <div className="bio-space">
        <div className="friend-info">
          <p className="friend-name">{friend.name}</p>
          <p className="friend-description">{friend.description}</p>
        </div>
        <div className="icon-container">
          <div className="icon-outer-circle">
            <div className={'inner-icon-container'} style={friendScoreStyle}>
              <i className={`fa ${friend.icon} friend-icon inner-friend-icon`} />
            </div>
          </div>
        </div>
      </div>

      <div className="goal-space">
        <div className="goal-header">
          <h3 className="goal-title">{'Goal Value'}</h3>
          <h3 className="goal-title">{'Action'}</h3>
          <h3 className="goal-title">{'Current Value'}</h3>
        </div>
        <div className="friend-goals">
          <FriendGoal
            type="phone"
            target={goalState.targetPhone}
            current={goalState.currentPhone}
          />
          <FriendGoal
            type="comment"
            target={goalState.targetText}
            current={goalState.currentText}
          />
          <FriendGoal
            className="last-goal-element"
            type="beer"
            target={goalState.targetBeer}
            current={goalState.currentBeer}
          />
        </div>
        <h1 className="goal-footer">{`${goalState.cadence} goals`}</h1>
      </div>
      <div className="edit-space">
        <ModalConsumer>
          {({ showModal }) => (
            <button
              className="btn btn-primary"
              onClick={() => showModal(Modal, {
                isOpen: true,
                goalState,
                username,
                setGoalState,
                name,
                friendId,
              })}
            >
              {'Edit goals'}
            </button>
          )}
        </ModalConsumer>
      </div>
    </div>
  );
};

export default FriendContent;
