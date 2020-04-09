import React from 'react';
import { shallow } from 'enzyme';
import FriendContent from './friend-content';

describe('FriendContent component', () => {
  const friend = {
    name: 'Yod Og',
    description: 'literally my dog tempi',
    icon: 'fa-lafel',
    friendScore: 25,
    goalSetCollection: {
      targetGoals: {
        phone: 1,
        text: 5,
        beer: 2,
      },
      currentGoals: {
        phone: 0,
        text: 2,
        beer: 0,
      },
    },
  };
  const showModal = () => {};

  const wrapper = shallow(<FriendContent friend={friend} showModal={showModal} />);

  it('should display the bio section', () => {
    expect(wrapper.find('.bio-space')).toHaveLength(1);
  });

  it('should display the goal section', () => {
    expect(wrapper.find('.goal-space')).toHaveLength(1);
  });

  it('should display the edit section', () => {
    expect(wrapper.find('.edit-space')).toHaveLength(1);
  });
});
