import React from 'react';
import { shallow } from 'enzyme';
import AppError from './app-error';

describe('AppError component', () => {
  it('should render', () => {
    const wrapper = shallow(<AppError />);
    expect(wrapper.find('div')).toHaveLength(2);
  });
});
