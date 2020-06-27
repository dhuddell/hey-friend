import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { LOGIN_USER } from '../../../graphql/mutations';

const Login = () => (
  <Mutation mutation={LOGIN_USER}>
    {
      (loginUser, { data }) => (
        <div className="login input-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Login
              </span>
            </div>
            { data && data.loginUser && data.loginUser.username ?
              <div>
                <p>{`Welcome, ${data.loginUser.username}!`}</p>
                <div className="home-link">
                  <Link to="/">{'Go see your friends!'}!</Link>
                </div>
              </div>
              : <Formik
                intialValues={{ username: '', password: '' }}
                onSubmit={async ({ username, password }, { setSubmitting, setErrors }) => {
                  const loginInput = {
                    variables: { loginInput: { username, password } },
                  };

                  try {
                    const response = await loginUser(loginInput);
                    const loginUserData = response.data.loginUser;
                    if (!loginUserData.username) {
                      setErrors({ username, password, message: loginUserData.message });
                      console.log('Login error: ', loginUserData.message); // eslint-disable-line
                      setSubmitting(false);
                    } else {
                      window.localStorage.setItem('token', loginUserData.token);
                      window.localStorage.setItem('username', loginUserData.username);
                    }
                  } catch (e) {
                    if (e.graphQLErrors) {
                      const errors = e.graphQLErrors.map((error) => error.message);
                      setSubmitting(false);
                      throw Error('GraphQL errors: ', errors);
                    } else {
                      console.log(e); // eslint-disable-line
                      throw Error('Unknown errors: ', e);
                    }
                  }
                }}

                render={({ errors, status, isSubmitting }) => (
                  <Form>
                    { errors.username && <div className="error-label">{errors.message}</div> }
                    <div className="modal-form local-form">
                      <div className="modal-form-selects">
                        <div className="modal-form-row login-form-row">
                          <div className="modal-form-cell-label">Username:</div>
                          <Field
                            required
                            name="username"
                            className="modal-select registration-input"
                            placeholder="billmurray"
                          />
                        </div>
                        <div className="modal-form-row login-form-row">
                          <div className="modal-form-cell-label">Password:</div>
                          <Field
                            required
                            name="password"
                            type="password"
                            className="modal-select registration-input"
                            placeholder="passward"
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
                      Login
                    </button>
                  </Form>
                )}
              />
            }
          </div>
          {
            data && data.loginUser && data.loginUser.username ?
              null :
              <div className="login-link">
                <Link to="/registration">Not registered? Click here to register!</Link>
              </div>
          }
        </div>
      )
    }
  </Mutation>
);

export default Login;
