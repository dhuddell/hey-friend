import React from 'react';
import { shallow } from 'enzyme';
import Modal from './modal';

describe('Modal component', () => {
  const goalSetCollection = {
    targetGoal: {
      phone: '1',
      text: '5',
      beer: '2',
    },
    currentGoal: {
      phone: '0',
      text: '2',
      beer: '0',
    },
  };

  let wrapper;
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();

  wrapper = shallow(
    <Modal
      handleClose={handleClose}
      show={false}
      handleSubmit={handleSubmit}
      goalSetCollection={goalSetCollection}
    />
  );

  it('should display no modal with hide class', () => {
    expect(wrapper.find('.display-none')).toHaveLength(1);
  });

  it('should display visible modal with show class', () => {
    wrapper = shallow(
      <Modal
        handleClose={handleClose}
        show={true} // eslint-disable-line
        handleSubmit={handleSubmit}
        goalSetCollection={goalSetCollection}
      />
    );
    expect(wrapper.find('.display-block')).toHaveLength(1);
  });
});
