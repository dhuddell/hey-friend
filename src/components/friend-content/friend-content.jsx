import React from 'react';
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
            target={goals.targetPhone}
            current={goals.currentPhone}
          />
          <FriendGoal
            type="comment"
            target={goals.targetText}
            current={goals.currentText}
          />
          <FriendGoal
            className="last-goal-element"
            type="beer"
            target={goals.targetBeer}
            current={goals.currentBrgeer}
          />
        </div>
        <h1 className="goal-footer">{'Monthly goals'}</h1>
      </div>
      <div className="edit-space">
        <ModalConsumer>
          {({ showModal }) => (
            <button
              className="btn btn-primary"
              onClick={() => showModal(Modal, {
                isOpen: true,
                goals,
                username,
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
