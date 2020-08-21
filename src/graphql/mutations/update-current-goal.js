import gql from 'graphql-tag';

export default gql`
  mutation UpdateCurrentGoal($updateCurrentGoalInput: UpdateCurrentGoalInput!) { 
    updateCurrentGoal(updateCurrentGoalInput: $updateCurrentGoalInput) {
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
