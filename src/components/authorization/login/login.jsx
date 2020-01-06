import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { LOGIN_USER } from '../../../graphql/mutations';

const Login = () => (
  <Mutation
    mutation={LOGIN_USER}
  >
    {
      (loginUser, { data }) => (
        <div className="login authorization-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Login
              </span>
            </div>
            { data ?
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
                    window.localStorage.setItem('token', response.data.loginUser.token);
                  } catch (e) {
                    const errors = e.graphQLErrors.map((error) => error.message);
                    console.log(errors); // eslint-disable-line
                    setSubmitting(false);
                    setErrors({ username, password, form: errors });
                  }
                }}

                render={({ errors, status, touched, isSubmitting }) => (
                  <Form>
                    <div className="form-cell">Username</div>
                    <Field
                      name="username"
                      className="authorization-field"
                      placeholder="..clever247"
                    />
                    { errors.username && touched.username && <div>{errors.username}</div> }
                    <div className="form-cell">Password</div>
                    <Field
                      name="password"
                      type="password"
                      className="authorization-field"
                      placeholder="..h4rdtoh4ck"
                    />
                    { errors.password && touched.password && <div>{errors.password}</div> }
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
            !data ?
              <div className="login-link">
                <Link to="/registration">Not Registered? Click here to register!</Link>
              </div> : null
          }
        </div>

      )
    }
  </Mutation>
);

export default Login;
