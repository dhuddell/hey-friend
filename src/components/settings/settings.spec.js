import React from 'react';
import { shallow } from 'enzyme';
import Settings from './settings';

describe('Modal component', () => {
  const wrapper = shallow(<Settings />);

  it('should display no modal with hide class', () => {
    expect(wrapper.find('.settings-page')).toHaveLength(1);
  });
});
