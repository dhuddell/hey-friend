import gql from 'graphql-tag';

export default gql`
  query Friends ($username: String!) {
    friends(username:$username){
      friendId
      name
      icon
      description
      friendScore
      goals {
        currentPhone
        currentText
        currentBeer
        targetPhone
        targetText
        targetBeer
        cadence
        updatedAt
        lastViewedAt
      }
    }
  }
`;
