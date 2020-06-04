import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendTargetGoals(
    $updateFriendTargetGoalsInput: UpdateFriendTargetGoalsInput!
  ) { 
    updateFriendTargetGoals(
      updateFriendTargetGoalsInput: $updateFriendTargetGoalsInput
    ) {
      phone
      text
      beer
      cadence
    }
  }
`;
