import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_CURRENT_GOAL } from '../../graphql/mutations';

const FriendGoal = ({
  type,
  icon,
  username,
  friendId,
  goalState,
  setGoalState,
}) => {
  const currentGoalKey = `current${type}`;
  const targetKey = `target${type}`;
  const inactiveClass = goalState.goals[currentGoalKey] === 0 ? 'down-arrow-inactive' : '';

  const [updateCurrentGoal] = useMutation(UPDATE_CURRENT_GOAL, { errorPolicy: 'all' });

  const handleDecrement = async () => {
    if (goalState.goals[currentGoalKey] !== 0) {
      const goals = {
        ...goalState.goals,
        [currentGoalKey]: goalState.goals[currentGoalKey] - 1,
      };

      setGoalState({ goals, friendScore: goalState.friendScore });
      await updateCurrentGoal({
        variables: {
          updateCurrentGoalInput: {
            goalValue: goalState.goals[currentGoalKey] - 1,
            goalKey: currentGoalKey,
            username,
            friendId,
          },
        },
      });
    }
  };

  const handleIncrement = async () => {
    const goals = {
      ...goalState.goals,
      [currentGoalKey]: goalState.goals[currentGoalKey] + 1,
    };

    setGoalState({ goals, friendScore: goalState.friendScore });
    await updateCurrentGoal({
      variables: {
        updateCurrentGoalInput: {
          goalValue: goalState.goals[currentGoalKey] + 1,
          goalKey: currentGoalKey,
          username,
          friendId,
        },
      },
    });
  };

  return (
    <div className={`${type}-goal friend-goal`}>
      <div className="target-goal-text-container">
        <p className="target-goal-text goal-text">{goalState.goals[targetKey]}</p>
      </div>
      <i className={`${icon} goal-icon`} />
      <div className="current-goal-container">
        <div className="current-goal-value">
          <p className="current-goal-text goal-text">{`${goalState.goals[currentGoalKey]}`}</p>
        </div>
        <div className="current-goal-stepper">
          <div className="goal-arrow" onClick={handleIncrement}>
            <i className={'fa fa-caret-up'} />
          </div>
          <div className={`goal-arrow ${inactiveClass}`} onClick={handleDecrement}>
            <i className={'fa fa-caret-down'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendGoal;
