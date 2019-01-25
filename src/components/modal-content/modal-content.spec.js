import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './modal-content';

describe('Modal component', () => {
  const handleSubmit = jest.fn();
  const friendStore = {
    updateGoals: jest.fn(),
    goalTargets: {
      text: '2',
      phone: '2',
      beer: '2',
    },
    cadence: 'Monthly',
  };

  const wrapper = shallow(<ModalContent friendStore={friendStore} handleSubmit={handleSubmit} />).dive();

  it('should display ModalContent', () => {
    expect(wrapper.find('.modal-form')).toHaveLength(1);
  });
});

