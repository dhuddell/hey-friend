import React from 'react';
import ReactModal from 'react-modal';
import { UpdateFriendModalContent, EditGoalsModalContent } from '..';

const Modal = ({
  onRequestClose,
  goalState,
  modalType,
  setGoalState,
  username,
  friendId,
}) => (
  <ReactModal
    className="modal"
    isOpen
    onRequestClose={onRequestClose}
    appElement={document.getElementById('app')}
  >
    <section className="modal-main">
      <div className="modal-header">
        <span className="modal-header-title">{'Update your goals'}</span>
        <button className="modal-close-btn fa fa-times" onClick={onRequestClose} />
      </div>
      <div className="modal-content">
        {
          modalType === 'updateFriend' ?
            <UpdateFriendModalContent
              onRequestClose={onRequestClose}
              goalState={goalState}
              setGoalState={setGoalState}
              username={username}
              friendId={friendId}
            /> :
            <EditGoalsModalContent
              onRequestClose={onRequestClose}
              goalState={goalState}
              setGoalState={setGoalState}
              username={username}
              friendId={friendId}
            />
        }
      </div>
    </section>
  </ReactModal>
);

export default Modal;
