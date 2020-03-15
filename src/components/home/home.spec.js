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

  // no luck with loaded state DH @1/27/20
  //describe.only('Loaded with no errors', () => {

    //it('should show children', async () => {
    //const successComponent = create(
      //<MockedProvider mocks={mocks} addTypename={false}>
        //<Home username="James" />
      //</MockedProvider>,
    //);
      //await wait(0);
      //// check for loading
      ////console.log(successComponent.debug());
      ////console.log(successComponent.find(FriendItems).parent().type());
      ////expect(successComponent.find(FriendItems)).toBeTruthy();
      //console.log(successComponent.toJSON().children[0].children)
      //expect(successComponent.root.findByType(AppLoading)).toBeTruthy();
    //});
  //});
});
