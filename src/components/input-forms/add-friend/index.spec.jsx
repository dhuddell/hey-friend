import React from 'react';
import { shallow } from 'enzyme';
import AddFriend from './add-friend';

describe('Add friend', () => {
  it('should render a div', () => {
    const wrapper = shallow(<AddFriend />);
    expect(wrapper.find('add-friend')).toHaveLength(0);
  });
});
