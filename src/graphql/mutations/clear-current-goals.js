import gql from 'graphql-tag';

export default gql`
  mutation ClearCurrentGoals($clearCurrentGoalsInput: UpdateFriendGoalsInput!) { 
    updateFriendGoals(updateFriendGoalsInput: $clearCurrentGoalsInput) {
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
