import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span clasaName="modal-header-title">{'Hi i\'m a modal'}</span>
          <button className="modal-close-btn fa fa-close" onClick={handleClose} />
        </div>
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

export default Modal;
