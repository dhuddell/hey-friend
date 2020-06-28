import gql from 'graphql-tag';

export default gql`
  mutation ClearCurrentGoals($clearCurrentGoalsInput: UpdateFriendInput!) { 
    updateFriend(updateFriendInput: $clearCurrentGoalsInput) {
      username
      friendId
      friendScore
      goals {
        targetPhone
        targetText
        targetBeer
        currentPhone
        currentText
        currentBeer
        cadence
      }
    }
  }
`;
