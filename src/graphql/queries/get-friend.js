import gql from 'graphql-tag';

export default gql`
  query Friend ($username: String!, $friendId: String!) {
    friend (username:$username, friendId: $friendId){
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
      }
    }
  }
`;
