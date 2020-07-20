import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useToasts } from 'react-toast-notifications';
import { Formik, Form, Field } from 'formik';
import { renderGoalOptions } from '../../../utils';
import { ADD_FRIEND } from '../../../graphql/mutations';
import { AuthRedirect } from '../..';

const initialValues = {
  name: '',
  description: '',
  targetText: 0,
  targetPhone: 0,
  targetBeer: 0,
  cadence: 'Monthly',
};

const AddFriend = () => {
  const username = localStorage.getItem('username') || null;
  const token = localStorage.getItem('token') || null;
  if (!username || !token) return <AuthRedirect />;

  const [addFriendToUser, { data }] = useMutation(ADD_FRIEND, { errorPolicy: 'all' });
  const { addToast } = useToasts();

  return (
    <div className="add-friend input-form content-wrapper">
      <div className="form-box">
        <div className="form-title add-friend-form-title">
          <span className="form-title-text">
            Add friend
          </span>
        </div>
        { data && data.addFriendToUser && data.addFriendToUser.name
          ? <div>
            <p>{`Thanks for adding ${data.addFriendToUser.name}!`}</p>
            <button className="btn btn-primary add-success-btn"
              onClick={() => {data.addFriendToUser = {};}}
            >
              <Link to="/add-friend">{'Add another'}</Link>
            </button>
            <button className="btn btn-primary add-success-btn">
              <Link to="/">{'See friends'}</Link>
            </button>
          </div>
          : <Formik
            intialValues={initialValues}
            onSubmit={async ({ name, description, targetText, targetPhone, targetBeer, cadence },
              { setSubmitting, setErrors }) => {
              const addFriendInput = {
                variables: {
                  addFriendInput: {
                    username,
                    name,
                    description,
                    icon: 'fab fa-500px', // 2020 HARD CODED UNTIL ICON PICKER
                    goals: {
                      targetText: parseInt(targetText, 10),
                      targetPhone: parseInt(targetPhone, 10),
                      targetBeer: parseInt(targetBeer, 10),
                      cadence,
                    },
                  },
                },
              };

              try {
                const response = await addFriendToUser(addFriendInput);
                const addFriendData = response.data.addFriendToUser;
                if (!addFriendData.username) {
                  setErrors({ username, name, message: addFriendData.message });
                  console.log('Registration error: ', addFriendData.message);
                  setSubmitting(false);
                }

                addToast('Friend added!', {
                  appearance: 'success',
                  autoDismissTimeout: 2500,
                  autoDismiss: true,
                });

                return <Redirect to="/" />;
              } catch (e) {
                if (e.graphQLErrors) {
                  const errors = e.graphQLErrors.map((error) => error.message);
                  console.log(errors);
                  setSubmitting(false);
                  setErrors({ username, name, errors });
                } else {
                  console.log(e);
                  throw Error('Error object did not have graphQLErrors');
                }
              }
            }}

            render={({ errors, status, isSubmitting }) => (
              <Form className="add-friend-form">
                { errors.username && <div className="error-label">{errors.message}</div> }
                <div className="modal-form local-form">
                  <div className="modal-form-selects">
                    <div className="modal-form-row">
                      <div className="modal-form-cell-label">Name:</div>
                      <Field
                        name="name"
                        required
                        className="modal-select"
                        placeholder="Will Smith"
                      />
                    </div>
                    <div className="modal-form-row">
                      <div className="modal-form-cell-label">Description:</div>
                      <Field
                        name="description"
                        required
                        className="modal-select"
                        placeholder="He's jiggy with it."
                      />
                    </div>
                    {/* ICON ICON ICON
                    <div className="modal-form-row">
                      <div className="modal-form-cell-label">Description:</div>
                      <Field
                        name="icon"
                        required
                        className="modal-select"
                        placeholder="fa-plus"
                      />
                    </div> */}
                    <div className="modal-form-row">
                      <span className="modal-form-cell-label">Phone call goal: </span>
                      <Field
                        name="targetPhone"
                        defaultValue={0}
                        component="select"
                        className="modal-select"
                      >
                        {renderGoalOptions()}
                      </Field>
                    </div>
                    <div className="modal-form-row">
                      <span className="modal-form-cell-label">Text msg goal: </span>
                      <Field
                        name="targetText"
                        defaultValue={0}
                        component="select"
                        className="modal-select"
                      >
                        {renderGoalOptions()}
                      </Field>
                    </div>
                    <div className="modal-form-row">
                      <span className="modal-form-cell-label">Get a beer goal: </span>
                      <Field
                        name="targetBeer"
                        defaultValue={0}
                        component="select"
                        className="modal-select"
                      >
                        {renderGoalOptions()}
                      </Field>
                    </div>
                    <div className="modal-form-row">
                      <span className="modal-form-cell-label">Timeframe: </span>
                      <Field
                        name="cadence"
                        defaultValue={'Monthly'}
                        component="select"
                        className="modal-select"
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </Field>
                    </div>
                  </div>
                </div>

                { status && status.msg && <div>{status.msg}</div> }
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn modal-btn input-btn add-friend-btn"
                >
                  Add!
                </button>
              </Form>
            )}
          />
        }
      </div>
    </div>
  );
};

export default AddFriend;
