import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { useToasts } from 'react-toast-notifications';
import { Formik, Form, Field } from 'formik';
import { REGISTER_USER } from '../../../graphql/mutations';

const Registration = () => {
  const { addToast } = useToasts();
  const [loggedInState, setLoggedInState] = useState(false);

  const toastAndRedirect = () => {
    addToast('Welcome!', {
      appearance: 'success',
      autoDismissTimeout: 2500,
      autoDismiss: true,
    });

    return <Redirect to="/" />;
  };

  return (
    <Mutation mutation={REGISTER_USER}>
      {
        (registerUser, { data }) => (
          <div className="registration input-form content-wrapper">
            <div className="form-box">
              <div className="form-title">
                <span className="form-title-text">
                  Registration
                </span>
              </div>
              { data?.registerUser?.username && loggedInState
                ? toastAndRedirect()
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
                        setLoggedInState(true);
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
                      { status?.msg && <div>{status.msg}</div> }
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
              data?.registerUser?.username &&
                <div className="login-link">
                  <Link to="/login">Already registered? Click here to login!</Link>
                </div>
            }
          </div>
        )
      }
    </Mutation>
  );
};

export default Registration;
