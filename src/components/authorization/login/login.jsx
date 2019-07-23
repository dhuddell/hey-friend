import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { LOGIN_USER } from '../../../graphql/mutations';
import { LOGIN_USER_CACHE_QUERY } from '../../../graphql/cache-queries';

const Login = () => (
  <Mutation
    mutation={LOGIN_USER}
    // WIP to handle cache. writing token and username to cache
    update={(cache, { data }) => {
      cache.writeData({ data });
      const loginUserResponse = cache.readQuery({ query: LOGIN_USER_CACHE_QUERY });
      console.log(loginUserResponse); // eslint-disable-line
    }}
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
                onSubmit={(values, actions) => {
                  loginUser({
                    variables: {
                      loginInput: {
                        username: values.username,
                        password: values.password,
                      },
                    },
                  });
                  actions.setSubmitting(false);
                }}
                render={({ errors, status, touched, isSubmitting }) => (
                  <Form>
                    <div className="form-cell">Username</div>
                    <Field
                      name="username"
                      className="authorization-field"
                      placeholder="..clever247"
                    />
                    {errors.username && touched.username && <div>{errors.username}</div>}
                    <div className="form-cell">Password</div>
                    <Field
                      name="password"
                      type="password"
                      className="authorization-field"
                      placeholder="..h4rdtoh4ck"
                    />
                    {errors.password && touched.password && <div>{errors.password}</div>}
                    {status && status.msg && <div>{status.msg}</div>}
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
          { !data ?
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
