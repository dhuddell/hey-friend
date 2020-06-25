import gql from 'graphql-tag';

export default gql`
  query User ($username: String!) {
    user (username: $username) {
      username
      name
      email
    }
  }
`;
