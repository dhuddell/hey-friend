import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from './nav-menu';

describe('Modal component', () => {
  const wrapper = shallow(<NavMenu showBanner={false} />);

  it('should display nav menu', () => {
    expect(wrapper.find('.nav-menu')).toHaveLength(1);
  });
});
