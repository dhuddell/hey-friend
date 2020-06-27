import React from 'react';

const FriendCreation = ({ showModal }) => (
  <div className="content-wrapper">
    <div className="bio-space">
      <div className="friend-info">
        <h1 className="friend-title">{'Friend name'}</h1>
        <h5 className="friend-text">
          {'Blurb about friend'}
          <i className={'fa fa-pencil-alt tiny-friend-icon'} />
        </h5>
      </div>
      <div className="icon-container">
        <div className="icon-outer-circle">
          <div className={'inner-icon-container one-hundred'}>
            <i className={'fa fa-pencil-alt friend-icon inner-friend-icon'} />
          </div>
        </div>
      </div>
    </div>
    <div className="goal-space">
      <h1 className="goal-title">{'Current amounts'}</h1>
      <div className="friend-goals">
        <button onClick={showModal}>
          {'Edit'}
          <i className={'fa fa-pencil btn-icon'} />
        </button>
        {/* <FriendGoal
          type="phone"
          target={goalTargets.phone}
          current={goalCurrents.phone}
        />
        <FriendGoal
          type="text"
          target={goalTargets.text}
          current={goalCurrents.text}
        />
        <FriendGoal
          type="beer"
          target={goalTargets.beer}
          current={goalCurrents.beer}
        /> */}
      </div>
    </div>
  </div>
);

export default FriendCreation;
