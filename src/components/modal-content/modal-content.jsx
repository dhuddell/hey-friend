import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { UpdateFriendGoals } from '../../graphql/mutations';

const ModalContent = (goals) => {
  let input;

  return (
    <Mutation mutation={UpdateFriendGoals} >
      {(updateGoals, { data }) => (
        <form className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            // this.setState({ show: false });
            updateGoals({ variables: { goals: input.value } });
          }}
        >
          <div className="modal-form-selects">
            <div className="modal-form-row">
              <div className="modal-form-cell">
                <p className="modal-form-cell-label">How many calls?</p>
                <select
                  defaultValue={goals ? goals.goalTargets.phone : null}
                  ref={(value) => {input.goalTargets.phone = value;}}
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
                <p className="modal-form-cell-label">How many texts?</p>
                <select
                  defaultValue={goals ? goals.goalTargets.text : null}
                  ref={(value) => {input.goalTargets.text = value;}}
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
                <p className="modal-form-cell-label">How many beers?</p>
                <select
                  defaultValue={goals ? goals.goalTargets.beer : null}
                  ref={(value) => {input.goalTargets.beer = value;}}
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
                <p className="modal-form-cell-label">How often?</p>
                <select
                  defaultValue={goals ? goals.cadence : null}
                  ref={(value) => {input.goals.cadence = value;}}
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
};

ModalContent.propTypes = {
  goals: PropTypes.shape({
    goalTargets: PropTypes.object,
    goalCurrents: PropTypes.object,
    cadence: PropTypes.string,
  }),
};

export default ModalContent;
