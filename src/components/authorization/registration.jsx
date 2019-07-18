import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterUser } from '../../graphql/mutations';

// LOOK AT FREAKING LOGIN IT"S DOPE AS FUCK

const Registration = () => (
  <Mutation mutation={RegisterUser}>
    {(registerUser, { data }) => (
      <div className="registration authorization-form">
        <div className="form-box">
          <div className="form-title">
            <span className="form-title-text">
              Registration
            </span>
          </div>
          <Formik
            intialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                registerUser({
                  variables: {
                    username: this.props.username,
                    password: this.props.friendId,
                  },
                });
                console.log(values, 'user created.'); // eslint-disable-line
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            })}

            render={(formikProps) => {
              const {
                handleSubmit,
                values,
                isSubmitting,
                handleBlur,
              } = formikProps;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="form-cell">Username</div>
                  <input
                    id="username"
                    className="authorization-field"
                    placeholder="..clever247"
                    value={values.username}
                    onBlur={handleBlur}
                  />
                  <div className="form-cell">Password</div>
                  <input
                    className="authorization-field"
                    type="password"
                    placeholder="..h4rdtoh4ck"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn modal-btn authorization-btn">
                      Register
                  </button>
                </form>
              );
            }}
          />
        </div>
        <div className="login-link">
          <Link to="/login">Registered? Click here to login!</Link>
        </div>
      </div>
    )}
  </Mutation>
);

export default Registration;
