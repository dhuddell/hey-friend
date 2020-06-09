import React, { useState } from 'react';
import { ModalConsumer } from '../../modal-context';
import { FriendGoal, Modal } from '..';

// CONSTANTIZE A BUNCH OF STUFF
// CONSTANTIZE A BUNCH OF STUFF
// CONSTANTIZE A BUNCH OF STUFF
// Currently does not rerender the style of the icon
const FriendContent = ({
  friend,
  username,
  friendId,
}) => {
  const { name, icon, description, goals, friendScore } = friend;
  const [goalState, setGoalState] = useState({ goals, friendScore });

  const friendScoreStyle = {
    height: `${goalState.friendScore}%`,
    width: `${goalState.friendScore}%`,
    fontSize: `${(goalState.friendScore / 100 * 3)}em`,
    filter: friendScore === 100 ? 'drop-shadow(0 0 1rem #00fbfb)' : '',
  };

  return (
    <div className="content-wrapper">
      <div className="bio-space">
        <div className="friend-info">
          <p className="friend-name">{name}</p>
          <p className="friend-description">{description}</p>
        </div>
        <div className="icon-container">
          <div className="icon-outer-circle">
            <div className={'inner-icon-container'} style={friendScoreStyle}>
              <i className={`fa ${icon} friend-icon inner-friend-icon`} />
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
            type="Phone"
            icon="phone"
            username={username}
            friendId={friendId}
            goalState={goalState}
            setGoalState={setGoalState}
          />
          <FriendGoal
            type="Text"
            icon="comment"
            username={username}
            friendId={friendId}
            goalState={goalState}
            setGoalState={setGoalState}
          />
          <FriendGoal
            className="last-goal-element"
            type="Beer"
            icon="beer"
            username={username}
            friendId={friendId}
            goalState={goalState}
            setGoalState={setGoalState}
          />
        </div>
        <h1 className="goal-footer">{`${goalState.goals.cadence} goals`}</h1>
      </div>
      <div className="edit-space">
        <ModalConsumer>
          {({ showModal }) => (
            <button
              className="btn btn-primary"
              onClick={() => showModal(Modal, {
                isOpen: true,
                username,
                goalState,
                setGoalState,
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
