import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema.graphql';
import user from './mocks/mock-user-data';
import friend from './mocks/mock-friend-data';
import friends from './mocks/mock-friends-data';


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
  Muation: () => ({
    // updateFriendGoals: () => new Promise((resolve) => setTimeout(() => resolve(friend), latency)),
  }),
  Query: () => ({
    user: () => new Promise((resolve) => setTimeout(() => resolve(user), latency)),
    friend: () => new Promise((resolve) => setTimeout(() => resolve(friend), latency)),
    friends: () => new Promise((resolve) => setTimeout(() => resolve(friends), latency)),
  }),
};

addMockFunctionsToSchema({ schema, mocks });

export default new SchemaLink({ schema });
