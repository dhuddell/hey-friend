import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './modal-content';

describe('Modal component', () => {
  // const handleSubmit = jest.fn();
  const wrapper = shallow(<ModalContent />);

  it('should display modal without hide class', () => {
    expect(wrapper.find('.modal-form')).toHaveLength(0); //this is fucked up
  });
});
