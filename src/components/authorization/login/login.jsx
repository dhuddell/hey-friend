import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { LOGIN_USER } from '../../../graphql/mutations';

const Login = () => (
  <Mutation mutation={LOGIN_USER}>
    {
      (loginUser, { data }) => (
        <div className="login authorization-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Login
              </span>
            </div>
            { data && data.loginUser && data.loginUser.success ?
              <div>
                <p>{`Welcome, ${data.loginUser.username}!`}</p>
                <div className="home-link">
                  <Link to="/">{'Go see your friends!'}!</Link>
                </div>
              </div> :
              <Formik
                intialValues={{ username: '', password: '' }}
                onSubmit={async ({ username, password }, { props, setSubmitting, setErrors }) => {
                  const loginInput = {
                    variables: { loginInput: { username, password } },
                  };

                  try {
                    const response = await loginUser(loginInput);
                    const loginUserData = response.data.loginUser;
                    if (loginUserData.success === false) {
                      setErrors({ username, password, message: loginUserData.message });
                      console.log('Login error: ', loginUserData.message); // eslint-disable-line
                      setSubmitting(false);
                    } else {
                      window.localStorage.setItem('token', loginUserData.token);
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

                render={({ errors, status, touched, isSubmitting }) => (
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
                      name="password"
                      type="password"
                      className="authorization-field"
                      placeholder="p@ssword"
                    />
                    { status && status.msg && <div>{status.msg}</div> }
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn modal-btn authorization-btn"
                    >
                      Login
                    </button>
                  </Form>
                )}
              />
            }
          </div>
          {
            data && data.registerUser && data.registerUser.success ?
              null :
              <div className="login-link">
                <Link to="/registration">Not Registered? Click here to register!</Link>
              </div>
          }
        </div>
      )
    }
  </Mutation>
);

export default Login;
