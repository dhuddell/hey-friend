import gql from 'graphql-tag';

export default gql`
  query user ($username: String!) {
    user (username: $username) {
      username
      password
      name
      setting
      friends {
        id
        name
        icon
        nickname
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
