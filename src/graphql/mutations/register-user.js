import gql from 'graphql-tag';

export default gql`
  mutation RegisterUser($registrationInput: RegistrationInput!) {
    registerUser (registrationInput:$registrationInput) {
      code
      success
      message
      username
      token
    }
  }
`;

