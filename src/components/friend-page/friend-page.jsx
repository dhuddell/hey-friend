import React, { Component } from 'react';
import { Header, NavMenu, FriendGoal } from '..';
import PropTypes from 'prop-types';
import MockData from '../../__mocks__/fileMock';

class Friend extends Component {
  constructor(props) {
    super(props);
    const contact = MockData.contacts.find((x) => x.id === this.props.match.params.contactId);
    this.state = {
      contact,
    };
  }

  render() {
    const contact = this.state.contact;
    const goalTargets = contact.goals.target;
    const goalCurrents = contact.goals.target;

    return (
      <div>
        <Header />
        <NavMenu />
        <div className="bio-space">
          <div className="friend-info">
            <h1 className="friend-title">{contact.name}</h1>
            <h5 className="friend-text">{contact.description}</h5>
          </div>
          <div className="icon-container friend-icon">
            <i className={`fa ${contact.icon} contact-icon`} />
          </div>
        </div>
        <div className="goal-space">
          <h1 className="goal-title">{'Current'}</h1>
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
          <h1 className="goal-title">{'Goal'}</h1>
        </div>
      </div>
    );
  }
}

Friend.propTypes = {
  contact: PropTypes.object,
  match: PropTypes.shape(),
};

export default Friend;
