import gql from 'graphql-tag';

export default gql`
  mutation RemoveFriend(
    $removeFriendInput: RemoveFriendInput!
  ) {
    removeFriend(
      removeFriendInput: $removeFriendInput
    ) {
      message
    }
  }
`;
