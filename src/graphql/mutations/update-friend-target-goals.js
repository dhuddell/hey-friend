import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendTargetGoals($username: String!, $friendId: String!, $goalSetCollection: GoalSetCollectionInput!) {
    updateFriendTargetGoals (username:$username, friendId: $friendId, goalSetCollection: $goalSetCollection) {
      friendId
      goalSetCollection {
        targetGoals {
          phone
          text
          beer
        }
        currentGoals {
          phone
          text
          beer
        }
        cadence
      }
    }
  }
`;
