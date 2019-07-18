import React from 'react';
import { shallow } from 'enzyme';
import { Mutation } from 'react-apollo';
import ModalContent from './modal-content';

describe('Modal content component', () => {
  const goalSetCollection = {
    targetGoals: {
      phone: '1',
      text: '3',
      beer: '5',
    },
    currentGoals: {
      phone: '1',
      text: '3',
      beer: '5',
    },
    cadence: 'monthly',
  };

  const wrapper = shallow(
    <ModalContent
      username={'joe'}
      friendId={'2'}
      goalSetCollection={goalSetCollection}
    />
  );

  it('should display ModalContent', () => {
    expect(wrapper.find(Mutation)).toHaveLength(1);
  });
});
