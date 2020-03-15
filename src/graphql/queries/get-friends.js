import gql from 'graphql-tag';

export default gql`
  query Friends ($username: String!) {
    friends(username:$username){
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
