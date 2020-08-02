import React from 'react';
import ReactModal from 'react-modal';
import {
  UpdateFriendInfoModalContent,
  EditGoalsModalContent,
  AddIconModalContent,
} from '..';

const modalTypeMap = {
  updateFriendInfo: {
    title: 'Update friend info',
    className: 'update-friend-info-modal',
    getContextComponent: ({ onRequestClose, props }) => (
      <UpdateFriendInfoModalContent
        onRequestClose={onRequestClose}
        props={props}
      />
    ),
  },
  editGoals: {
    title: 'Edit your goals',
    className: 'edit-goals-modal',
    getContextComponent: ({ onRequestClose, props }) => (
      <EditGoalsModalContent
        onRequestClose={onRequestClose}
        props={props}
      />
    ),
  },
  addIcon: {
    title: 'Choose an icon',
    className: 'add-icon-modal',
    getContextComponent: ({ onRequestClose, props }) => (
      <AddIconModalContent
        onRequestClose={onRequestClose}
        props={props}
      />
    ),
  },
};

const renderModalContent = ({ modalType, props, onRequestClose }) =>
  modalTypeMap[modalType].getContextComponent({ onRequestClose, props });

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
    <section className={`modal-main ${modalTypeMap[modalType].className}`}>
      <div className="modal-header">
        <span className="modal-header-title">
          { modalTypeMap[modalType].title }
        </span>
        <button className="modal-close-btn fa fa-times" onClick={onRequestClose} />
      </div>
      <div className="modal-content">
        {renderModalContent({ modalType, props, onRequestClose })}
      </div>
    </section>
  </ReactModal>
);

export default Modal;
