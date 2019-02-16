import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

const ModalContent = ({ friendStore, id, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    friendStore.updateGoals({
      id,
      goals: {
        targetGoals: {
          phone: friendStore.formFields.phone,
          text: friendStore.formFields.text,
          beer: friendStore.formFields.beer,
        },
        cadence: friendStore.formFields.cadence,
      },
    });
    handleClose();
  };

  return ( // needs to read goals and then mutate values
    <form className="modal-form" onSubmit={handleSubmit}>
      <div className="modal-form-selects">
        <div className="modal-form-row">
          <div className="modal-form-cell">
            <p className="modal-form-cell-label">How many calls?</p>
            <select
              defaultValue={friendStore.goalTargets ? friendStore.goalTargets.phone : 'default'}
              className="modal-select"
              onChange={(e) => friendStore.updateFormFields('phoneGoal', e.target.value)}
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
              defaultValue={friendStore.goalTargets ? friendStore.goalTargets.text : 'default'}
              className="modal-select"
              onChange={(e) => friendStore.updateFormFields('textGoal', e.target.value)}
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
              defaultValue={friendStore.goalTargets ? friendStore.goalTargets.beer : 'default'}
              className="modal-select"
              onChange={(e) => friendStore.updateFormFields('beerGoal', e.target.value)}
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
              defaultValue={friendStore ? friendStore.cadence : 'default'}
              className="modal-select"
              onChange={(e) => friendStore.updateFormFields('cadence', e.target.value)}
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
        Set your goals!
      </button>
    </form>
  );
};

ModalContent.propTypes = {
  friendStore: PropTypes.object, // this should be shape or mobx proptypes
  handleClose: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default inject('friendStore')(ModalContent);
