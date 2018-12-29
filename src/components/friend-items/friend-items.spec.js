import React from 'react';
import { shallow } from 'enzyme';
import FriendItems from './friend-items';

describe('FriendItems component', () => {
  const friends =
  [
    {
      name: 'Yo g',
      id: '2',
    },
    {
      name: 'Yod Og',
      id: '3',
    },
    {
      name: 'Yod ',
      id: '1',
    },
  ];

  const wrapper = shallow(<FriendItems friends={friends} />);

  it('should display the bio section', () => {
    expect(wrapper.children()).toHaveLength(3);
  });
});
