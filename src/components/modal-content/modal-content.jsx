import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { UPDATE_FRIEND_TARGET_GOALS } from '../../graphql/mutations';

class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  input = {
    targetGoals: {
      phone: '',
      text: '',
      beer: '',
    },
    cadence: '',
  }

  targetGoals = this.props.goalSetCollection.targetGoals;
  cadence = this.props.goalSetCollection.cadence;

  render() {
    return (
      <Mutation mutation={UPDATE_FRIEND_TARGET_GOALS} >
        {(updateFriendGoals, { data }) => (
          <form className="modal-form"
            onSubmit={(e) => {
              e.preventDefault();
              // this.setState({ show: false });
              // console.log(this.input, this.props.username, this.props.friendId);
              updateFriendGoals({
                variables:
                {
                  goalSetCollection: this.input,
                  username: this.props.username,
                  friendId: this.props.friendId,
                },
              });
              // }).then((val) => console.log('completed', val));
            }}
          >
            <div className="modal-form-selects">
              <div className="modal-form-row">
                <div className="modal-form-cell">
                  <p className="modal-form-cell-label">How many calls?</p> {/* PHONEPHONEPHONEPHONEPHONE */}
                  <select
                    defaultValue={this.targetGoals ? this.targetGoals.phone : null}
                    ref={(value) => {this.input.targetGoals.phone = value;}}
                    className="modal-select"
                  >
                    <option disabled value="default" hidden>Choose!</option>
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
                  <p className="modal-form-cell-label">How many texts?</p> {/* TEXT TEXT TEXT TEXT TEXT */}
                  <select
                    defaultValue={this.targetGoals ? this.targetGoals.text : null}
                    ref={(value) => {this.input.targetGoals.text = value;}}
                    className="modal-select"
                  >
                    <option disabled value="default" hidden>Choose!</option>
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
                  <p className="modal-form-cell-label">How many beers?</p> {/* BEEEEEEEEEEEER */}
                  <select
                    defaultValue={this.targetGoals ? this.targetGoals.beer : null}
                    ref={(value) => {this.input.targetGoals.beer = value;}}
                    className="modal-select"
                  >
                    <option disabled value="default" hidden>Choose!</option>
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
                  <p className="modal-form-cell-label">How often?</p> {/* CADENCE */}
                  <select
                    defaultValue={this.cadence ? this.cadence : null}
                    ref={(value) => {this.input.cadence = value;}}
                    className="modal-select"
                  >
                    <option disabled value="default" hidden>Choose!</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn modal-btn">
              Save your goals!
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}

ModalContent.propTypes = {
  goalSetCollection: PropTypes.shape({
    targetGoals: PropTypes.object,
    cadence: PropTypes.string,
  }),
  username: PropTypes.string,
  friendId: PropTypes.string,
};

export default ModalContent;
