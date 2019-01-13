import React from 'react';
import PropTypes from 'prop-types';
import percentMapper from '../../helpers/percent-mapper';
import { FriendGoal } from '..';

const FriendContent = ({ friend, showModal }) => {
  const goalTargets = friend.goals.targetGoal;
  const goalCurrents = friend.goals.currentGoal;

  return (
    <div className="content-wrapper">
      <div className="bio-space">
        <div className="friend-info">
          <h1 className="friend-title">{friend.name}</h1>
          <h5 className="friend-text">{friend.description}</h5>
        </div>
        <div className="icon-container">
          <div className="icon-outer-circle">
            <div className={`inner-icon-container ${percentMapper(friend.friendScore)}`}>
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
        <button className="btn btn-secondary" onClick={showModal}>
          {'Edit'}
          <i className={'fa fa-pencil btn-icon'} />
        </button>
      </div>
    </div>
  );
};

FriendContent.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    friendScore: PropTypes.number,
    goals: PropTypes.shape({
      targetGoal: PropTypes.shape({
        text: PropTypes.string,
        beer: PropTypes.string,
        phone: PropTypes.string,
      }),
      currentGoal: PropTypes.shape({
        text: PropTypes.string,
        beer: PropTypes.string,
        phone: PropTypes.string,
      }),
    }),
  }),
  showModal: PropTypes.func,
};

export default FriendContent;
