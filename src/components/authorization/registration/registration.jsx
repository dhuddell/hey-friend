import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { REGISTER_USER } from '../../../graphql/mutations';

const Registration = () => (
  <Mutation mutation={REGISTER_USER}>
    {
      (registerUser, { data }) => (
        <div className="registration authorization-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Registration
              </span>
            </div>
            { data && data.registerUser && data.registerUser.username ?
              <div>
                <p>{`Thanks for registering, ${data.registerUser.username}!`}</p>
                <div className="home-link">
                  <Link to="/">{'Go see your friends!'}!</Link>
                </div>
              </div> :
              <Formik
                intialValues={{ username: '', password: '' }}
                onSubmit={async ({ username, password }, { setSubmitting, setErrors }) => {
                  const registrationInput = {
                    variables: { registrationInput: { username, password } },
                  };

                  try {
                    const response = await registerUser(registrationInput);
                    const registerUserData = response.data.registerUser;

                    if (!registerUserData.username) {
                      setErrors({ username, password, message: registerUserData.message });
                      console.log('Registration error: ', registerUserData.message); // eslint-disable-line
                      setSubmitting(false);
                    } else {
                      window.localStorage.setItem('token', registerUserData.token);
                      window.localStorage.setItem('username', registerUserData.username);
                    }
                  } catch (e) {
                    if (e.graphQLErrors) {
                      const errors = e.graphQLErrors.map((error) => error.message);
                      console.log(errors); // eslint-disable-line
                      setSubmitting(false);
                      setErrors({ username, password, errors });
                    } else {
                      console.log(e); // eslint-disable-line
                      throw Error('Error object did not have graphQLErros');
                    }
                  }
                }}

                render={({ errors, status, isSubmitting }) => (
                  <Form>
                    { errors.username && <div className="error-label">{errors.message}</div> }
                    <div className="form-cell">Username</div>
                    <Field
                      name="username"
                      className="authorization-field"
                      placeholder="George Michael"
                    />
                    <div className="form-cell">Password</div>
                    <Field
                      type="password"
                      name="password"
                      className="authorization-field"
                      placeholder="p@ssword"
                    />
                    { status && status.msg && <div>{status.msg}</div> }
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn modal-btn authorization-btn"
                    >
                      Register
                    </button>
                  </Form>
                )}
              />
            }
          </div>
          {
            data && data.registerUser && data.registerUser.username ?
              null :
              <div className="login-link">
                <Link to="/login">Registered? Click here to login!</Link>
              </div>
          }
        </div>
      )
    }
  </Mutation>
);

export default Registration;
