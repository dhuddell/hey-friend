import React, { useState } from 'react';
import { iconList } from '../../utils';

const AddIconModalContent = ({
  onRequestClose,
  props,
}) => {
  const { setIconState, iconState } = props;
  const [activeIconState, setActiveIconState] = useState(iconState);

  return (
    <div>
      <div className="modal-form">
        <div className="icon-list">
          {
            iconList.map((icon) => {
              const isActiveClass = icon === activeIconState ? 'activeIcon' : '';

              return (
                <div
                  key={icon}
                  className={`${isActiveClass} single-list-icon`}
                  onClick={() => setActiveIconState(icon)}
                >
                  <i className={`${icon} friend-icon inner-friend-icon`} />
                </div>
              );
            })
          }
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIconState(activeIconState);
            onRequestClose();
          }}
        >
          {'Confirm'}
        </button>
      </div>
    </div>
  );
};

export default AddIconModalContent;
