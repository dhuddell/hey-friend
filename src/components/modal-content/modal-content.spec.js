import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './modal-content';

describe('Modal component', () => {
  const handleSubmit = jest.fn();
  const wrapper = shallow(<ModalContent handleSubmit={handleSubmit} />);

  // it('should display modal without hide class', () => { // THIS IS FUCKED UP??
    //   expect(wrapper.find('.modal-form')).toHaveLength(0);
  // const wrapper = shallow(<ModalContent friendStore={friendStore} friendId={'2'} handleSubmit={handleSubmit} />).dive();

  it('should display ModalContent', () => {
    expect(wrapper.find('.modal-form')).toHaveLength(1);
  });
});
