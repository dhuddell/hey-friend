import React from 'react';
import { shallow } from 'enzyme';
import { Mutation } from 'react-apollo';
import ModalContent from './modal-content';

describe('Modal content component', () => {
  const goals = {
    targetGoals: {
      phone: 1,
      text: 3,
      beer: 5,
    },
    currentGoals: {
      phone: 1,
      text: 3,
      beer: 5,
    },
    cadence: 'Monthly',
  };

  const wrapper = shallow(
    <ModalContent
      username={'joe'}
      name={'Brandon'}
      goals={goals}
    />
  );

  it('should display ModalContent', () => {
    expect(wrapper.find(Mutation)).toHaveLength(1);
  });
});
