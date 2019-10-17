import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { LOGIN_USER } from '../../graphql/mutations';
import { USER_QUERY } from '../../graphql/queries';

let username;

const Login = () => (
  <Mutation
    mutation={LOGIN_USER}
    // THIS IS NEXT: HANDLE SUBMITTING, ERROR, SUCCESS
    // ALSO TODO RENAME ALL MUTATIONS AND QUERY WITH CAPITALS
    update={(cache, { data: { loginUser } }) => {


      // WIP to handle cache. unsure how to handle the data back versus the data being passed to update (loginUser)


      const { user } = cache.readQuery({ query: USER_QUERY, variables: { username } });
      cache.writeQuery({
        query: USER_QUERY,
        // variables: { username },
        data: { user },
      });
    }}
  >
    {
      (loginUser, data) => (
        <div className="login authorization-form">
          <div className="form-box">
            <div className="form-title">
              <span className="form-title-text">
                Login
              </span>
            </div>
            <Formik
              intialValues={{ username: '', password: '' }}
              onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2));
                loginUser({
                  variables: {
                    loginInput: {
                      username: values.username,
                      password: values.password,
                    },
                  },
                });
                username = values.username;
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
          </div>
          <div className="login-link">
            <Link to="/registration">Not Registered? Click here to register!</Link>
          </div>
        </div>

      )
    }
  </Mutation>
);

export default Login;
