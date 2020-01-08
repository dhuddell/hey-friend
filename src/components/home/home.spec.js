import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import renderer from 'react-test-renderer';
import { Query } from 'react-apollo';
import { USER_QUERY } from '../../graphql/queries';
import mockUserResponse from '../../graphql/mocks/mock-user-data';
import {
  Home,
  AppError,
  AppLoading,
  FriendItems,
} from '..';

const mocks = [
  {
    request: { query: USER_QUERY },
    result: mockUserResponse,
  },
];

describe('Home component', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home username="James" />
    </MockedProvider>,
  );
  const componentInstance = component.root;
  console.log(componentInstance); // eslint-disable-line
  const query = component.findByType(Query);
  const ChildComponent = query.props.children;
  const data = {
    user: {
      friends: [],
    },
  };

  it('should pass ClaimRepQuery to Query component', () => {
    expect(query.props().query).toEqual(USER_QUERY);
  });

  describe('Loading state', () => {
    const childComponent = shallow(<ChildComponent loading={true} data={data} />); // eslint-disable-line

    it('should show Loading while loading', () => {
      expect(childComponent.find(AppLoading)).toHaveLength(1);
    });
  });

  describe('Loaded state, with errors', () => {
    const childComponent = shallow(<ChildComponent loading={false} data={data} error={{}} />);

    it('should show error state', () => {
      expect(childComponent.find(AppError)).toHaveLength(1);
    });
  });

  describe('Loaded with no errors', () => {
    const childComponent = shallow(<ChildComponent loading={false} data={data} />);

    it('should show children', () => {
      expect(childComponent.find(FriendItems)).toHaveLength(1);
    });
  });
});
