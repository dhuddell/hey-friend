import SchemaLink from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema.graphql';
import userData from './mock-user-data';

const schema = makeExecutableSchema(
  typeDefs
);

let latency = 0;

if (typeof process !== 'undefined') {
  latency = process.env.GRAPHQL_LATENCY;
}

const mocks = {
  Query: () => ({
    userData: () => new Promise((resolve) => setTimeout(() => resolve(userData, latency))),
  }),
};

addMockFunctionsToSchema({ schema, mocks });

export default new SchemaLink({ schema });
