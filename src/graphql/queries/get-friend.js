import gql from 'graphql-tag';

export default gql`
  query Friend ($username: String!, $id: String) {
    friend (username:$username, id: $id){
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
