import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { REGISTER_USER } from '../../../graphql/mutations';

const Registration = () => (
  <Mutation mutation={REGISTER_USER}>
    {
      (registerUser, { data }) => (
        <div className="registration input-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Registration
              </span>
            </div>
            { data && data.registerUser && data.registerUser.username
              ? <div>
                <p>{`Thanks for registering, ${data.registerUser.username}!`}</p>
                <div className="home-link">
                  <Link to="/">{'Go see your friends!'}!</Link>
                </div>
              </div>
              : <Formik
                intialValues={{ username: '', password: '', name: '', email: '' }}
                onSubmit={async ({ username, password, name, email }, { setSubmitting, setErrors }) => {
                  const registrationInput = {
                    variables: { registrationInput: { username, password, name, email } },
                  };

                  try {
                    const response = await registerUser(registrationInput);
                    const registerUserData = response.data.registerUser;

                    if (!registerUserData.username) {
                      setErrors({ username, password, name, email, message: registerUserData.message });
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
                      setErrors({ username, password, name, email, errors });
                    } else {
                      console.log(e); // eslint-disable-line
                      throw Error('Error object did not have graphQLErros');
                    }
                  }
                }}

                render={({ errors, status, isSubmitting }) => (
                  <Form className="registration-form">
                    { errors.username && <div className="error-label">{errors.message}</div> }
                    <div className="modal-form local-form">
                      <div className="modal-form-selects">
                        <div className="modal-form-row">
                          <div className="modal-form-cell-label">Username:</div>
                          <Field
                            required
                            name="username"
                            className="modal-select registration-input"
                            placeholder="billmurray"
                          />
                        </div>
                        <div className="modal-form-row">
                          <div className="modal-form-cell-label">Password:</div>
                          <Field
                            required
                            name="password"
                            type="password"
                            className="modal-select registration-input"
                            placeholder="passward"
                          />
                        </div>
                        <div className="modal-form-row">
                          <div className="modal-form-cell-label">Name:</div>
                          <Field
                            required
                            name="name"
                            className="modal-select registration-input"
                            placeholder="Bill Murray"
                          />
                        </div>
                        <div className="modal-form-row">
                          <div className="modal-form-cell-label">Email:</div>
                          <Field
                            required
                            type="email"
                            name="email"
                            className="modal-select registration-input"
                            placeholder="murray@bill.gov"
                          />
                        </div>
                      </div>
                    </div>
                    { status && status.msg && <div>{status.msg}</div> }
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn modal-btn input-btn"
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
                <Link to="/login">Already registered? Click here to login!</Link>
              </div>
          }
        </div>
      )
    }
  </Mutation>
);

export default Registration;
