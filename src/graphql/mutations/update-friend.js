import gql from 'graphql-tag';


// this isn't used yet
export default gql`
  mutation UpdateFriend(
    $updateFriendInput: UpdateFriendInput!
  ) { 
    updateFriend(
      updateFriendInput: $updateFriendInput
    ) {
      username
      friendId
      name
      icon
      description
      friendScore
      goals {
        targetPhone
        targetText
        targetBeer
        cadence
      }
    }
  }
`;
