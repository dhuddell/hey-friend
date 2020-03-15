import React from 'react';
import { ModalConsumer } from '../../modal-context';
import { FriendGoal, Modal } from '..';

const FriendContent = ({
  friend,
  username,
  name,
  goalSetCollection,
}) => {
  const goalTargets = friend.goalSetCollection.targetGoals;
  const goalCurrents = friend.goalSetCollection.currentGoals;

  const friendScoreStyle = {
    height: `${friend.friendScore}%`,
    width: `${friend.friendScore}%`,
    fontSize: `${(friend.friendScore / 100 * 3)}em`,
  };

  return (
    <div className="content-wrapper">
      <div className="bio-space">
        <div className="friend-info">
          <h1 className="friend-title">{friend.name}</h1>
          <h5 className="friend-text">{friend.description}</h5>
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
        <h1 className="goal-title">{'Current amounts'}</h1>
        <div className="friend-goals">
          <FriendGoal
            type="phone"
            target={goalTargets.phone}
            current={goalCurrents.phone}
          />
          <FriendGoal
            type="comment"
            target={goalTargets.text}
            current={goalCurrents.text}
          />
          <FriendGoal
            type="beer"
            target={goalTargets.beer}
            current={goalCurrents.beer}
          />
        </div>
        <h1 className="goal-title">{'Monthly goals'}</h1>
      </div>
      <div className="edit-space">
        <ModalConsumer>
          {({ showModal }) => (
            <button
              className="btn btn-secondary"
              onClick={() => showModal(Modal, {
                isOpen: true,
                goalSetCollection,
                username,
                name,
              })}
            >
              {'Edit'}
              <i className={'fa fa-pencil btn-icon'} />
            </button>
          )}
        </ModalConsumer>
      </div>
    </div>
  );
};

export default FriendContent;
