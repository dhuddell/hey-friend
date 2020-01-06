import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema';
import user from './mocks/mock-user-data';
import loginResponse from './mocks/mock-user-login-data';
import friend from './mocks/mock-friend-data';
import friends from './mocks/mock-friends-data';


const resolverValidationOptions = {
  requireResolversForResolveType: false,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions,
});

let latency = 0; // nice for viewing loading states

if (typeof process !== 'undefined') {
  latency = process.env.GRAPHQL_LATENCY;
}

const mocks = {
  Mutation: () => ({
    loginUser: () => new Promise((resolve) => setTimeout(() => resolve(loginResponse), latency)),
  }),
  Query: () => ({
    user: () => new Promise((resolve) => setTimeout(() => resolve(user), latency)),
    friend: () => new Promise((resolve) => setTimeout(() => resolve(friend), latency)),
    friends: () => new Promise((resolve) => setTimeout(() => resolve(friends), latency)),
  }),
};

addMockFunctionsToSchema({ schema, mocks });

export default new SchemaLink({ schema });
