import React from 'react';
import ReactModal from 'react-modal';
import { UpdateFriendModalContent, EditGoalsModalContent } from '..';

const Modal = ({
  onRequestClose,
  modalType,
  ...props
}) => (
  <ReactModal
    className="modal"
    isOpen
    onRequestClose={onRequestClose}
    appElement={document.getElementById('app')}
  >
    <section className="modal-main">
      <div className="modal-header">
        <span className="modal-header-title">
          {
            modalType === 'updateFriend' ?
              'Update friend info' :
              'Edit your goals'
          }
        </span>
        <button className="modal-close-btn fa fa-times" onClick={onRequestClose} />
      </div>
      <div className="modal-content">
        {
          modalType === 'updateFriend' ?
            <UpdateFriendModalContent
              onRequestClose={onRequestClose}
              props={props}
            /> :
            <EditGoalsModalContent
              onRequestClose={onRequestClose}
              props={props}
            />
        }
      </div>
    </section>
  </ReactModal>
);

export default Modal;
