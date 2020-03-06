import React from 'react';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { USER_QUERY } from '../../graphql/queries';
import mockUserResponse from '../../graphql/mocks/mock-user-data';
import {
  Home,
  AppLoading,
  AppError,
} from '..';

const mocks = [
  {
    request: { query: USER_QUERY, variables: { username: 'James' } },
    result: mockUserResponse,
  },
];

describe('Home component', () => {
  window.alert = jest.fn();

  describe('Loading state', () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home username="James" />
      </MockedProvider>
    );

    it('should show Loading while loading', () => {
      expect(component.find(AppLoading)).toBeTruthy();
    });
  });

  describe('Loaded state, with errors', () => {
    const errorMocks = [
      {
        request: { query: USER_QUERY, variables: { username: 'James' } },
        error: new Error('Oh noes'),
      },
    ];


    it('should show error state', async () => {
      const errorComponent = mount(
        <MockedProvider mocks={errorMocks} addTypename={false}>
          <Home username="James" />
        </MockedProvider>,
      );

      await wait(0);
      expect(errorComponent.find(AppError)).toBeTruthy();
    });
  });
});
