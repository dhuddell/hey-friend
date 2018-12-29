import React from 'react';
import { shallow } from 'enzyme';
import { Friend, AppLoading, AppError } from '..';
import { Query } from 'react-apollo';
import { GetFriendQuery } from '../../graphql/queries';

describe('Friend component', () => {
  const match = { params: { id: '1' } };
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
      expect(query.props().variables).toEqual({ id: '1' });
    });
  });

  const data = {
    friend: { id: '1', goals: [] },
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

    it('Does not show anything', () => {
      expect(component.find(AppError)).toHaveLength(1);
    });
  });
});
