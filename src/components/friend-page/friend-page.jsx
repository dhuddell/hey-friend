import React, { Component } from 'react';
import { Header, NavMenu, Modal, FriendGoal } from '..';
import PropTypes from 'prop-types';
import MockData from '../../__mocks__/fileMock';
import percentMapper from '../../helpers/percent-mapper';
// import { observer } from mobx-react

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ show: false });
    // saveEditGoals('do shit with the store') mobx
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
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="modal-form-row">
              <div className="modal-form-cell">
                <p>How many phone?</p>
                <select className="modal-select">
                  <option disabled selected hidden>Choose!</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="modal-form-cell">
                <p>How many text?</p>
                <select className="modal-select">
                  <option disabled selected hidden>Choose!</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="modal-form-row">
              <div className="modal-form-cell">
                <p>How many beers?</p>
                <select className="modal-select">
                  <option disabled selected hidden>Choose!</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="modal-form-cell">
                <p>{'What\'s the cadence?'}</p>
                <select className="modal-select">
                  <option disabled selected hidden>Choose!</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn modal-btn">
              set goals!
            </button>
          </form>
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
