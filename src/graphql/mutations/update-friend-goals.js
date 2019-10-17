import gql from 'graphql-tag';

export default gql`
  mutation UpdateFriendGoals($username: String!, $friendId: String!, $goalSetCollection: GoalSetCollectionInput!) {
    updateFriendGoals (username:$username, friendId: $friendId, goalSetCollection: $goalSetCollection) {
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
