import gql from 'graphql-tag';

export default gql`
  mutation LoginUser($loginInput: LoginInput!) {
    loginUser (loginInput: $loginInput) {
      message
      username
      token
    }
  }
`;
