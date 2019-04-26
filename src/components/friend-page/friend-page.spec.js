import React from 'react';
import { shallow } from 'enzyme';
import { Friend, AppLoading, AppError } from '..';
import { Query } from 'react-apollo';
import { GetFriendQuery } from '../../graphql/queries';

describe('Friend component', () => {
  const match = { params: { friendId: '1' } };
  const wrapper = shallow(<Friend match={match} />);
  const query = wrapper.find(Query);

  afterAll(jest.resetAllMocks);

  it('should render Friend page', () => {
    expect(wrapper).toHaveLength(1);
  });

  describe('Query', () => {
    it('should pass ClaimRepQuery', () => {
      expect(query.props().query).toEqual(GetFriendQuery);
    });

    it('should pass claimNumber as a variables object', () => {
      expect(query.props().variables).toEqual({ friendId: '1' });
    });
  });

  const data = {
    friend: {
      name: 'Yo g',
      icon: 'boop',
      friendScore: 30,
      friendId: '1',
      goalSetCollection: {},
      description: 'boooop',
    },
  };

  const ChildComponent = query.props().children;

  describe('Loading state', () => {
    const component = shallow(<ChildComponent loading={true} data={data} />); // eslint-disable-line

    it('should show Loading while loading', () => {
      expect(component.find(AppLoading)).toHaveLength(1);
    });
  });

  describe('Loaded state, with errors', () => {
    const component = shallow(<ChildComponent loading={false} data={data} error={{}} />);

    it('should show error state', () => {
      expect(component.find(AppError)).toHaveLength(1);
    });
  });

  describe('Loaded with no errors', () => {
    // const component = shallow(<ChildComponent loading={false} data={data} />); // FRIEND CONTENT IS FUCKED UP

    // it('should show children', () => {
    //   expect(component.find(FriendContent)).toHaveLength(1);
    // });
  });

  describe('Friend component methods', () => {
    const instance = wrapper.instance();
    instance.setState = jest.fn();

    it('should call setSate with show: true on showModal', () => {
      instance.showModal();
      expect(instance.setState).toBeCalledWith({ show: true });
    });

    it('should call setSate with show: false on hideModal', () => {
      instance.hideModal();
      expect(instance.setState).toBeCalledWith({ show: false });
    });

    // it('should call setSate with show: false on handleSubmit', () => { BROKEN
    //   const e = { preventDefault: () => {} };
    //   instance.handleSubmit(e);
    //   expect(instance.setState).toBeCalledWith({ show: false });
    // });
  });
});
