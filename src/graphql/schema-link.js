import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema.graphql';
import user from './mock-user-data';

const resolverValidationOptions = {
  requireResolversForResolveType: false,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions,
});

let latency = 0;

if (typeof process !== 'undefined') {
  latency = process.env.GRAPHQL_LATENCY;
}

const mocks = {
  Query: () => ({
    user: () => new Promise((resolve) => setTimeout(() => resolve(user), latency)),
  }),
};

addMockFunctionsToSchema({ schema, mocks });

export default new SchemaLink({ schema });
