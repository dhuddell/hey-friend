import React, { Component } from 'react';
import { Header, NavMenu, Modal, FriendGoal } from '..';
import PropTypes from 'prop-types';
import MockData from '../../__mocks__/fileMock';
import percentMapper from '../../helpers/percent-mapper';
// import { observer } from mobx-react

class Friend extends Component {
  constructor(props) {
    super(props);
    const friend = MockData.friends.find((x) => x.id === this.props.match.params.friendId);
    this.state = {
      friend,
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ show: false });
    // saveEditGoals('do shit with the store') mobx
  }

  render() {
    const friend = this.state.friend;
    const goalTargets = friend.goals.target;
    const goalCurrents = friend.goals.target;

    return (
      <div>
        <Header />
        <NavMenu />
        <Modal
          handleClose={this.hideModal}
          show={this.state.show}
          handleSubmit={this.handleSubmit}
        />
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
          <div>
            <button className="btn btn-secondary" onClick={this.showModal}>
              {'Edit'}
              <i className={'fa fa-pencil btn-icon'} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Friend.propTypes = {
  friend: PropTypes.object,
  match: PropTypes.shape(),
};

export default Friend;
