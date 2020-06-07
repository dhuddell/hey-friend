import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendGoals(
    $updateFriendInput: UpdateFriendInput!
  ) { 
    updateFriend(
      updateFriendInput: $updateFriendInput
    ) {
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
