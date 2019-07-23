import gql from 'graphql-tag';

export default gql`
  query loginUser {
    loginUser {
      message
      username
      token
    }
  }
`;
