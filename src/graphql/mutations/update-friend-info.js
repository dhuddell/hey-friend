import gql from 'graphql-tag';

 export default gql`
  mutation UpdateFriendInfo(
    $updateFriendInfoInput: UpdateFriendInfoInput!
  ) { 
    updateFriendInfo(
      updateFriendInfoInput: $updateFriendInfoInput
    ) {
      username
      friendId
      name
      icon
      description
    }
  }
`;
