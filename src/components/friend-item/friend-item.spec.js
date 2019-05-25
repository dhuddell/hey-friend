import React from 'react';
import { shallow } from 'enzyme';
import FriendItem from './friend-item';

describe('FriendGoal component', () => {
  const data = {
    name: 'TEMPIMONSTER',
    icon: 'fa-lalala',
    friendId: '2',
    friendScore: 30,
  };

  const wrapper = shallow(<FriendItem data={data} username="joe" />);

  it('should render a link to the right friend', () => {
    expect(wrapper.find('.friend-wrapper').props().to).toEqual('joe/friends/2');
  });

  it('should display target value', () => {
    expect(wrapper.find('.friend-name').text()).toEqual('TEMPIMONSTER');
  });

  it('should render dynamic icon', () => {
    expect(wrapper.find('.fa-lalala')).toHaveLength(1);
  });
});
