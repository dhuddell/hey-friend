import React from 'react';
import { shallow } from 'enzyme';
import FriendGoal from './friend-goal';

describe('FriendGoal component', () => {
  const wrapper = shallow(<FriendGoal type="phone" target="4" current="2"/>);

  it('should assign dynamic className', () => {
    expect(wrapper.find('.phone-goal')).toHaveLength(1);
  });

  it('should display target value', () => {
    expect(wrapper.find('.target-goal-text').text()).toEqual('4');
  });

  it('should render dynamic icon', () => {
    expect(wrapper.find('.fa-phone')).toHaveLength(1);
  });

  it('should handle missing optional param', () => {
    expect(wrapper.find('.current-goal-text').text()).toEqual('2');
  });

  describe('handle component without optional params', () => {
    const localWrapper = shallow(<FriendGoal type="phone" />);

    it('should handle current while receiving no optional param', () => {
      expect(localWrapper.find('.current-goal-text').text()).toEqual('0');
    });

    it('should handle current while receiving no optional params', () => {
      expect(localWrapper.find('.target-goal-text').text()).toEqual('0');
    });
  });
});
