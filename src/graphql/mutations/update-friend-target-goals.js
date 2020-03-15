import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendTargetGoals($username: String!, $name: String!, $targetGoalValues: TargetGoalValues!) {
    updateFriendTargetGoals (username:$username, name: $name, targetGoalValues: $targetGoalValues) {
      String
    }
  }
`;
