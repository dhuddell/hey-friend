import React from 'react';
import { shallow } from 'enzyme';
import { Query } from 'react-apollo';
import { USER_QUERY } from '../../graphql/queries';
import {
  Home,
  AppError,
  AppLoading,
  FriendItems,
} from '..';

// HALPEPLPLEPAKEPAKJPQKMSOAKN

import { MockedProvider, renderer } from '@apollo/react-testing';

// The component AND the query need to be exported
import { GET_DOG_QUERY, Dog } from './dog';

const mocks = [
  {
    request: {
      query: GET_DOG_QUERY,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );
});

// old stuff below

describe('Home component', () => {
  const wrapper = shallow(<Home />);
  const query = wrapper.find(Query);
  const ChildComponent = query.props().children;
  const data = {
    user: {
      friends: [],
    },
  };

  it('should render header', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should pass ClaimRepQuery to Query component', () => {
    expect(query.props().query).toEqual(USER_QUERY);
  });

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
    const component = shallow(<ChildComponent loading={false} data={data} />);

    it('should show children', () => {
      expect(component.find(FriendItems)).toHaveLength(1);
    });
  });
});
