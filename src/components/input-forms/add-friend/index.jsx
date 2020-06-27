import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useToasts } from 'react-toast-notifications';
import { Formik, Form, Field } from 'formik';
import { renderGoalOptions } from '../../../utils';
import { ADD_FRIEND } from '../../../graphql/mutations';

const AddFriend = () => {
  const [addFriendToUser, { data }] = useMutation(ADD_FRIEND);
  const { addToast } = useToasts();

  return (
    <div className="add-friend input-form">
      <div className="form-box">
        <div className="form-title add-friend-form-title">
          <span className="form-title-text">
            Add friend
          </span>
        </div>
        { data && data.addFriendToUser && data.addFriendToUser.name
          ? <div>
            <p>{`Thanks for adding ${data.addFriendToUser.name}!`}</p>
            <div className="home-link">
              <Link to="/">{'Go see your friends!'}!</Link>
            </div>
          </div>
          : <Formik
            intialValues={{ username: '', password: '', name: '', email: '' }}
            onSubmit={async ({ username, password, name, email }, { setSubmitting, setErrors }) => {
              const addFriendInput = {
                variables: { addFriendInput: { username, password, name, email } },
              };

              try {
                const response = await addFriendToUser(addFriendInput);
                const addFriendData = response.data.addFriendToUser;

                if (!addFriendData.username) {
                  setErrors({ username, password, name, email, message: addFriendData.message });
                  console.log('Registration error: ', addFriendData.message); // eslint-disable-line
                  setSubmitting(false);
                }

                addToast('They\'re added!', { appearance: 'success' });

              } catch (e) {
                if (e.graphQLErrors) {
                  const errors = e.graphQLErrors.map((error) => error.message);
                  console.log(errors); // eslint-disable-line
                  setSubmitting(false);
                  setErrors({ username, password, name, email, errors });
                } else {
                  console.log(e); // eslint-disable-line
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
                    <div className="modal-form-row">
                      <span className="modal-form-cell-label">Get a beer goal: </span>
                      <Field
                        name="targetPhone"
                        required
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
                        name="targetText"
                        required
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
                        required
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
                        defaultValue={'Monthly'}
                        required
                        component="select"
                        name="cadence"
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
