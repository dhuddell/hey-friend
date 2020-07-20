import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { useToasts } from 'react-toast-notifications';
import Joyride from 'react-joyride';
import { Formik, Form, Field } from 'formik';
import { StepStyles, IntroSteps } from '../../../onboarding';
import { LOGIN_USER } from '../../../graphql/mutations';

const Login = () => {
  const { addToast } = useToasts();
  const [loggedInState, setLoggedInState] = useState(false);
  const [tourState] = useState(IntroSteps);

  const toastAndRedirect = () => {
    addToast('Welcome back!', {
      appearance: 'success',
      autoDismissTimeout: 2500,
      autoDismiss: true,
    });

    return <Redirect to="/" />;
  };

  const [loginUser, { data }] = useMutation(LOGIN_USER);

  return (
    <div>
      <Joyride
        steps={tourState.steps}
        locale={{ last: 'Done' }}
        continuous
        styles={StepStyles}
      />
      <div className="login input-form content-wrapper">
        <div className="form-box">
          <div className="form-title">
            <span className="form-title-text">
              Login
            </span>
          </div>
          {data?.loginUser?.username && loggedInState
            ? toastAndRedirect()
            : <Formik
              intialValues={{ username: '', password: '' }}
              onSubmit={async ({ username, password }, { setSubmitting, setStatus }) => {
                const loginInput = { loginInput: { username, password } };

                try {
                  const { data, loading } = await loginUser({ variables: loginInput });
                  const loginUserData = data.loginUser;

                  if (loading) setSubmitting(true);

                  if (!loginUserData.username) {
                    // Jul 19, 2020 could do something with these values down here.
                    setStatus({ username, password, message: loginUserData.message });
                    console.log('Login error: ', loginUserData.message);
                    setSubmitting(false);
                  } else {
                    window.localStorage.setItem('token', loginUserData.token);
                    window.localStorage.setItem('username', loginUserData.username);
                    setLoggedInState(true);
                  }
                } catch (e) {
                  if (e.graphQLErrors.length) {
                    const errors = e.graphQLErrors.map((error) => error.message);
                    setStatus({ errors });
                    setSubmitting(false);
                  } else {
                    console.log(e);
                    throw Error('Unknown errors: ', e);
                  }
                }
              }}

              render={({ errors, status, isSubmitting }) => (
                <Form>
                  <div className="modal-form local-form">
                    <div className="modal-form-selects">
                      <div className="error-container">
                        {
                          // Old way I handled errors.
                          // {errors.username && <div className="error-label">{errors.message}</div>}
                          status?.errors &&
                          <p className="form-error">{`Error: ${status.errors}`}</p>
                        }
                      </div>
                      <div className="modal-form-row top-row">
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
          !data?.loginUser?.username &&
          <div className="login-link">
            Not registered? <Link to="/registration"> Click here to register!</Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;
