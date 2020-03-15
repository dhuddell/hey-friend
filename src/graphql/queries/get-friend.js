import gql from 'graphql-tag';

export default gql`
  query Friend ($username: String!, $name: String) {
    friend (username:$username, name: $name){
      name
      icon
      description
      friendScore
      goalSetCollection {
        currentGoals {
          phone
          text
          beer
        }
        targetGoals {
          phone
          text
          beer
        }
        cadence
      }
    }
  }
`;
