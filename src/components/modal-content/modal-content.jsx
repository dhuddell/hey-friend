import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = ({ handleSubmit }) => (
  <form className="modal-form" onSubmit={handleSubmit}>
    <div className="modal-form-selects">
      <div className="modal-form-row">
        <div className="modal-form-cell">
          <p className="modal-form-cell-label">How many calls?</p>
          <select defaultValue="default" className="modal-select">
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
          <select defaultValue="default" className="modal-select">
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
          <select defaultValue="default" className="modal-select">
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
          <select defaultValue="default" className="modal-select">
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

ModalContent.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ModalContent;
