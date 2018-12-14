import React from 'react';
import { shallow } from 'enzyme';
import FriendGoal from './friend-goal';

describe('FriendGoal component', () => {
  const wrapper = shallow(<FriendGoal type="phone" target={4} />);

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
    expect(wrapper.find('.current-goal-text').text()).toEqual('0');
  });
});
