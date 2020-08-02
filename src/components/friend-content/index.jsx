import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from '@apollo/react-hooks';
import { ModalConsumer } from '../../modal-context';
import { REMOVE_FRIEND, CLEAR_CURRENT_GOALS } from '../../graphql/mutations';
import { FriendGoal, Modal } from '..';
import { useHistory } from 'react-router-dom';

// CONSTANTIZE A BUNCH OF STUFF
// Currently does not rerender the style of the icon
const FriendContent = ({
  friend,
  username,
  friendId,
}) => {
  const { name, icon, description, goals, friendScore } = friend;
  const { addToast } = useToasts();

  const history = useHistory();
  const [goalState, setGoalState] = useState({ goals, friendScore });
  const [friendInfoState, setFriendInfoState] = useState({ name, icon, description });

  const [removeFriend] = useMutation(REMOVE_FRIEND, { errorPolicy: 'all' });
  const [clearCurrentGoals] = useMutation(CLEAR_CURRENT_GOALS, { errorPolicy: 'all' });

  const maxScoreClass = friendScore === 100 ? 'details-max-score' : '';
  // 6/29/2020 need to figure out how to get this to re-render
  const friendScoreStyle = {
    height: `${goalState.friendScore}%`,
    width: `${goalState.friendScore}%`,
    fontSize: `${(goalState.friendScore / 100 * 3)}em`,
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to remove friend?')) {
      await removeFriend({ variables: { removeFriendInput: { username, friendId } } });
      addToast('Friend removed', {
        autoDismissTimeout: 2500,
        autoDismiss: true,
        appearance: 'success',
      });

      return history.push('/');
    }
  };

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear your current goals?')) {
      const clearGoalsResponse = await clearCurrentGoals({
        variables: {
          clearCurrentGoalsInput: {
            username,
            friendId,
            goals: { currentBeer: 0, currentPhone: 0, currentText: 0 },
          },
        },
      });

      const updatedGoalState = clearGoalsResponse.data.updateFriendGoals;
      setGoalState({ goals: updatedGoalState.goals, friendScore: updatedGoalState.friendScore });
      addToast('Current values reset', {
        autoDismissTimeout: 2500,
        autoDismiss: true,
        appearance: 'success',
      });
    }
  };

  return (
    <div className="content-wrapper">
      <div className="bio-space">
        <div className="friend-info">
          <p className="friend-name">{friendInfoState.name}</p>
          <p className="friend-description">{friendInfoState.description}</p>
        </div>
        <div className="icon-container">
          <div className={`icon-outer-circle ${maxScoreClass}`}>
            <div className={'inner-icon-container'} style={friendScoreStyle}>
              <i className={`${friendInfoState.icon} friend-icon inner-friend-icon`} />
            </div>
          </div>
        </div>
      </div>

      <div className="goal-space">
        <div className="goal-header">
          <h3 className="goal-title">{'Target Goal'}</h3>
          <h3 className="goal-title">{'Action'}</h3>
          <h3 className="goal-title">{'Current Value'}</h3>
        </div>
        <div className="friend-goals">
          <FriendGoal
            type="Phone"
            icon="fas fa-phone-alt"
            username={username}
            friendId={friendId}
            goalState={goalState}
            setGoalState={setGoalState}
          />
          <FriendGoal
            type="Text"
            icon="fa fa-comment"
            username={username}
            friendId={friendId}
            goalState={goalState}
            setGoalState={setGoalState}
          />
          <FriendGoal
            className="last-goal-element"
            type="Beer"
            icon="fa fa-beer"
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
            <div>
              <button
                className="btn btn-primary"
                onClick={() => showModal(Modal, {
                  isOpen: true,
                  modalType: 'editGoals',
                  username,
                  goalState,
                  setGoalState,
                  friendId,
                })}
              >
                {'Edit goals'}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => showModal(Modal, {
                  isOpen: true,
                  modalType: 'updateFriendInfo',
                  username,
                  name,
                  icon,
                  friendInfoState,
                  setFriendInfoState,
                  friendId,
                })}
              >
                {'Update info'}
              </button>
            </div>
          )}
        </ModalConsumer>
        <button
          className="btn btn-secondary"
          onClick={handleClear}
        >
          {'Reset values'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleDelete}
        >
          {'Remove friend'}
        </button>
      </div>
    </div>
  );
};

export default FriendContent;
