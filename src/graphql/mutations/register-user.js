import gql from 'graphql-tag';

export default gql`
  mutation RegisterUser($registrationInput: RegistrationInput!) {
    registerUser (registrationInput:$registrationInput) {
      message
      username
      token
    }
  }
`;

