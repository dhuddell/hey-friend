import React from 'react';
import { shallow } from 'enzyme';
import Modal from './modal';

describe('Modal component', () => {
  const goals = {
    targetGoal: {
      phone: 1,
      text: 5,
      beer: 2,
    },
    currentGoal: {
      phone: 0,
      text: 2,
      beer: 0,
    },
  };

  const onRequestClose = jest.fn();
  let wrapper;
  const handleSubmit = jest.fn();

  wrapper = shallow(
    <Modal
      friendId={'1'}
      name={'Brandon'}
      username={'james'}
      goals={goals}
      onRequestClose={onRequestClose}
    />
  );

  it('should display visible modal with show class', () => {
    wrapper = shallow(
      <Modal
        friendId={'1'}
        name={'Brandon'}
        username={'james'}
        handleSubmit={handleSubmit}
        goals={goals}
      />
    );
    expect(wrapper.find('.modal-main')).toHaveLength(1);
  });
});
