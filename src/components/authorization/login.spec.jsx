import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('Registration', () => {
  // THIS IS WRONG, BUT LOGIN UNDER CONSTRUCTION
  it('should render a div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('login')).toHaveLength(0);
  });
});
