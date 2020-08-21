import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendGoals($updateFriendGoalsInput: UpdateFriendGoalsInput!) { 
    updateFriendGoals(updateFriendGoalsInput: $updateFriendGoalsInput) {
      friendScore
      goals {
        targetPhone
        targetText
        targetBeer
        currentPhone
        currentText
        currentBeer
        cadence
        updatedAt
        lastViewedAt
      }
    }
  }
`;
