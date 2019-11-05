import gql from 'graphql-tag';

export default gql`
  type GoalSet {
    phone: String
    text: String
    beer: String
  }

  input GoalSetInput {
    phone: String
    text: String
    beer: String
  }

  type GoalSetCollection {
    currentGoals: GoalSet
    targetGoals: GoalSet
    cadence: String
  }

  input GoalSetCollectionInput {
    currentGoals: GoalSetInput
    targetGoals: GoalSetInput
    cadence: String
  }

  input FriendInput {
    name: String!
    icon: String
    nickname: String
    friendScore: Float
    description: String
    goalSetCollection: GoalSetCollectionInput
    username: String!
  }

  type Friend {
    id: String
    name: String
    icon: String
    nickname: String
    friendScore: Float
    description: String
    goalSetCollection: GoalSetCollection
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input UserInput {
    username: String!
    password: String!
    name: String
    setting: String
  }

  type User {
    username: String!
    password: String!
    name: String
    friends: [Friend]
    setting: String

  }

  type LoginResponse {
    message: String!
    username: String!
    token: String
  }

  type Query {
    user(username: String!): User
    users: [User]
    friend(id: String!): Friend
    friends: [Friend]
  }

  type Mutation {
    updateTargetFriendGoals(id: String!, goalSetCollection: GoalSetCollectionInput): Friend

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(friendId: String): String
    removeFriends(ignoreString: String): String

    removeUser(username: String): String
    registerUser(userInput: UserInput!): User
    removeUsers(ignoreString: String): String
    loginUser(loginInput: LoginInput!): LoginResponse
  }
`;