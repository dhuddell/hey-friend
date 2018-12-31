import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './modal-content';

describe('Modal component', () => {
  const handleSubmit = jest.fn();
  const wrapper = shallow(<ModalContent handleSubmit={handleSubmit} />);

  it('should display no modal with hide class', () => {
    expect(wrapper.find('.modal-form')).toHaveLength(1);
  });
});
