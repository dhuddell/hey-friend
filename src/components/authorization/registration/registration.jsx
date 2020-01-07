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
            { data ?
              <div>
                <p>{`Thanks for registering, ${data.registerUser.username}!`}</p>
                <div className="home-link">
                  <Link to="/">{'Go see your friends!'}!</Link>
                </div>
              </div> :
              <Formik
                intialValues={{ username: '', password: '' }}
                onSubmit={async ({ username, password }, { props, setSubmitting, setErrors }) => {
                  const registrationInput = {
                    variables: { registrationInput: { username, password } },
                  };

                  try {
                    const response = await registerUser(registrationInput);
                    window.localStorage.setItem('token', response.data.registerUser.token);
                  } catch (e) {
                    if (e.graphQLErrors) {
                      const errors = e.graphQLErrors.map((error) => error.message);
                      console.log(errors); // eslint-disable-line
                      setSubmitting(false);
                      setErrors({ username, password, form: errors });
                    } else {
                      console.log(e)
                      throw Error("Error object did not have graphQLErros");
                    }
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
                      type="password"
                      name="password"
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
                      Register
                    </button>
                  </Form>
                )}
              />
            }
          </div>
          {
            !data ?
              <div className="login-link">
                <Link to="/login">Registered? Click here to login!</Link>
              </div> : null
          }
        </div>
      )
    }
  </Mutation>
);

export default Registration;
