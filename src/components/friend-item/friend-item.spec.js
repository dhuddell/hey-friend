import React from 'react';
import { shallow } from 'enzyme';
import FriendItem from './friend-item';

describe('FriendGoal component', () => {
  const data = {
    name: 'TEMPIMONSTER',
    icon: 'fa-lalala',
    id: '2',
    friendScore: '30',
  };

  const wrapper = shallow(<FriendItem data={data} />);

  it('should render a link to the right friend', () => {
    expect(wrapper.find('.friend-wrapper').props().to).toEqual('/friends/2');
  });

  // it('should display target value', () => {
  //   expect(wrapper.find('.target-goal-text').text()).toEqual('4');
  // });

  // it('should render dynamic icon', () => {
  //   expect(wrapper.find('.fa-phone')).toHaveLength(1);
  // });

  // it('should handle missing optional param', () => {
  //   expect(wrapper.find('.current-goal-text').text()).toEqual('0');
  // });
});
