import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>{'Hi i\'m a modal'}</h1>
        {children}
        <button className="btn modal-btn" onClick={handleClose}>
          {'Close'}
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.array,
};

export default Modal;
