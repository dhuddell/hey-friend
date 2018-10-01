import React, { Component } from 'react';
import { Header, NavMenu, Modal, FriendGoal } from '..';
import PropTypes from 'prop-types';
import MockData from '../../__mocks__/fileMock';
import percentMapper from '../../helpers/percent-mapper';

class Friend extends Component {
  constructor(props) {
    super(props);
    const contact = MockData.contacts.find((x) => x.id === this.props.match.params.contactId);
    this.state = {
      contact,
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    const contact = this.state.contact;
    const goalTargets = contact.goals.target;
    const goalCurrents = contact.goals.target;

    return (
      <div>
        <Header />
        <NavMenu />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>this</p>
          <p>that</p>
        </Modal>
        <div className="content-wrapper">
          <div className="bio-space">
            <div className="friend-info">
              <h1 className="friend-title">{contact.name}</h1>
              <h5 className="friend-text">{contact.description}</h5>
            </div>
            <div className="icon-container">
              <div className="icon-outer-circle">
                <div className={`inner-icon-container ${percentMapper(contact.activity)}`}>
                  <i className={`fa ${contact.icon} contact-icon inner-contact-icon`} />
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
  contact: PropTypes.object,
  match: PropTypes.shape(),
};

export default Friend;
