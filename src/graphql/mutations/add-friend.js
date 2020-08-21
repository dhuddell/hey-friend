import gql from 'graphql-tag';

// this isn't used yet
export default gql`
  mutation AddFriend(
    $addFriendInput: AddFriendInput!
  ) { 
    addFriend(
      addFriendInput: $addFriendInput
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
        updatedAt
        lastViewedAt
      }
    }
  }
`;
