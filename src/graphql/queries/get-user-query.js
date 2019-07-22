import gql from 'graphql-tag';

export default gql`
  query user ($username: String!) {
    user {
      username
      password
      name
      setting
      friends {
        name
        icon
        friendId
        description
        friendScore
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
