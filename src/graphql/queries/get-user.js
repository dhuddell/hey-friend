import gql from 'graphql-tag';

export default gql`
  query User ($username: String!) {
    user (username: $username) {
      username
      password
      name
      setting
      friends {
        friendId
        name
        icon
        friendScore
        description
        goalSetCollection {
          targetGoals {
            phone
            text
            beer
          }
          currentGoals {
            phone
            text
            beer
          }
          cadence
        }
      }
    }
  }
`;
