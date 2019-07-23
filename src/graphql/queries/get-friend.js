import gql from 'graphql-tag';

export default gql`
  query friend ($username: String!, $friendId: String) {
    friend (username:$username, friendId:$friendId){
      friendId
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
