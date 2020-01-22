import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendTargetGoals($username: String!, $friendId: String!, $targetGoalValues: TargetGoalValues!) {
    updateFriendTargetGoals (username:$username, friendId: $friendId, targetGoalValues: $targetGoalValues) {
      String
    }
  }
`;
