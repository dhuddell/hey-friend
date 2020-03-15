/* eslint-disable */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Friend, AppLoading, AppError } from '..';
import { Query } from 'react-apollo';
import { FRIEND_QUERY } from '../../graphql/queries';

describe.skip('Friend component', () => {
  // TODO 3/15/2020 these are effed
  window.alert = jest.fn();
  const match = { params: { name: 'Brandon', username: 'james' } };
  const wrapper = shallow(<Friend match={match} />);
  const query = wrapper.find(Query);
  console.log(query)

  afterAll(jest.resetAllMocks);

  it('should return Redirect if no localstorage username', () => {
    expect(wrapper.contains(Redirect)).toBe(true);
  });

  it('should render Friend page', () => {
    expect(wrapper).toHaveLength(1);
  });

  describe('Query', () => {
    it('should pass FRIEND_QUERY', () => {
      expect(query.props().query).toEqual(FRIEND_QUERY);
    });

    it('should pass name and username as a variables object', () => {
      expect(query.props().variables).toEqual({ name: 'Brandon', username: 'james' });
    });
  });

  const data = {
    friend: {
      name: 'Yo g',
      icon: 'boop',
      friendScore: 30,
      goals: {},
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

  // Under construction
  // describe('Loaded with no errors', () => {
  //   const component = shallow(<ChildComponent loading={false} data={data} />);

  //   it('should show children', () => {
  //     expect(component.find(FriendContent)).toHaveLength(1);
  //   });
  // });
});
