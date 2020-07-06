import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema';
import user from './mocks/mock-user-data';
import loginResponse from './mocks/mock-user-login-data';
import registrationResponse from './mocks/mock-user-registration-data';
import friendResponse from './mocks/mock-friend-data';
import friendsResponse from './mocks/mock-friends-data';

const resolverValidationOptions = { requireResolversForResolveType: false };

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions,
});

const latency = process ? process.env.GRAPHQL_LATENCY : 0;

// if (typeof process !== 'undefined') {
//   latency = process.env.GRAPHQL_LATENCY;
// }

// updateUser(updateUserInput: UpdateUserInput!): User
// updateFriendInfo(updateFriendInfoInput: UpdateFriendInfoInput!): Friend
// updateFriendGoals(updateFriendGoalsInput: UpdateFriendGoalsInput!): Friend
// updateCurrentGoal(updateCurrentGoalInput: UpdateCurrentGoalInput!): UpdateGoalResponse

// removeUser(username: String): ConfirmationResponse
// removeUsers(ignoreString: String): ConfirmationResponse
// removeFriend(removeFriendInput: RemoveFriendInput!): ConfirmationResponse
// removeFriends(username: String!): ConfirmationResponse

const mocks = {
  Mutation: () => ({
    loginUser: () => new Promise((resolve) => setTimeout(() => resolve(loginResponse), latency)),
    registerUser: () => new Promise((resolve) => setTimeout(() => resolve(registrationResponse), latency)),
    updateFriendInfo: () => new Promise((resolve) => setTimeout(() => resolve(friendResponse), latency)),
    updateFriendGoals: () => new Promise((resolve) => setTimeout(() => resolve(friendResponse), latency)),
    AddFriendToUser: () => new Promise((resolve) => setTimeout(() => resolve(friendResponse), latency)),
    removeFriend: () => new Promise((resolve) => setTimeout(() => resolve({ message: 'Deleted.' }), latency)),
  }),
  Query: () => ({
    user: () => new Promise((resolve) => setTimeout(() => resolve(user), latency)),
    friend: () => new Promise((resolve) => setTimeout(() => resolve(friendResponse), latency)),
    friends: () => new Promise((resolve) => setTimeout(() => resolve(friendsResponse.friends), latency)),
  }),
};

addMockFunctionsToSchema({ schema, mocks });

export default new SchemaLink({ schema });
