import gql from 'graphql-tag';

export default gql`
  mutation RegisterUser($userInput: UserInput!) {
    registerUser (userInput:$userInput) {
      username
      password
    }
  }
`;

