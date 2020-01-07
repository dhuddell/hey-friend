import React from 'react';
import PropTypes from 'prop-types';
import { ModalContent } from '..';

const Modal = ({ handleClose, show, goalSetCollection, username, id }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="modal-header-title">{'Hi I\'m a modal'}</span>
          <button className="modal-close-btn fa fa-close" onClick={handleClose} />
        </div>
        <div className="modal-content">
          <ModalContent
            goalSetCollection={goalSetCollection}
            username={username}
            id={id}
          />
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  goalSetCollection: PropTypes.object,
  username: PropTypes.string.isRequired,
};

export default Modal;
