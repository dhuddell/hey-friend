import React from 'react';
import { shallow } from 'enzyme';
import FriendItems from './friend-items';

describe('FriendItems component', () => {
  const friends =
  [
    {
      name: 'Yo g',
      icon: 'boop',
      id: '2',
      friendScore: 30,
    },
    {
      name: 'Yod Og',
      icon: 'bp',
      id: '3',
      friendScore: 30,
    },
    {
      name: 'Yod ',
      icon: 'boo',
      id: '1',
      friendScore: 30,
    },
  ];

  const wrapper = shallow(<FriendItems friends={friends} />);

  it('should display the bio section', () => {
    expect(wrapper.children()).toHaveLength(3);
  });
});
