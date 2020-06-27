import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('should render header', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });
});
