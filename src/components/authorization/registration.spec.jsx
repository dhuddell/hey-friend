import React from 'react';
import { shallow } from 'enzyme';
import Registration from './registration';

describe('Registration', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Registration />);
    expect(wrapper.find('registration')).toHaveLength(1);
  });
});
