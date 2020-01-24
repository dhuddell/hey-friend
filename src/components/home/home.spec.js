import React from 'react';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import renderer from 'react-test-renderer';
import { USER_QUERY } from '../../graphql/queries';
import mockUserResponse from '../../graphql/mocks/mock-user-data';
import { Home } from '..';

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

  describe('Loading state', () => {
    it('should show Loading while loading', () => {
      expect(component.toJSON().children).toContain('Loading...');
    });
  });

  describe('Loaded state, with errors', () => {
    const errorMocks = [
      {
        request: { query: USER_QUERY },
        error: new Error('Oh crap'),
      },
    ];

    const errorComponent = renderer.create(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Home username="James" />
      </MockedProvider>,
    );

    it('should show error state', () => {
      expect(errorComponent.toJSON().children[0].children).toContain('Error!');
    });
  });

  describe('Loaded with no errors', () => {
    const loadedComponent = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home username="James" />
      </MockedProvider>,
    );

    it('should show children', async () => {
      await wait(0);

      const p = loadedComponent.toJSON();
      expect(p.children).toContain('Buck is a poodle');
    });
  });
});
