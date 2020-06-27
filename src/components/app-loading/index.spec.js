import React from 'react';
import { shallow } from 'enzyme';
import AppLoading from './app-loading';

describe('AppLoading component', () => {
  it('should render', () => {
    const wrapper = shallow(<AppLoading />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
