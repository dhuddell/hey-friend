import React from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { renderGoalOptions } from '../../utils';
import { UPDATE_FRIEND_GOALS } from '../../graphql/mutations';

const EditGoalsModalContent = ({
  onRequestClose,
  props,
}) => {
  const { username, friendId, setGoalState, goalState } = props;

  return (
    <Mutation mutation={UPDATE_FRIEND_GOALS}>
      {(updateFriend) => (
        <Formik
          className="modal-form"

          // I'm diving more than I want to.
          onSubmit={async ({
            targetPhone = goalState.goals.targetPhone.toString(),
            targetText = goalState.goals.targetText.toString(),
            targetBeer = goalState.goals.targetBeer.toString(),
            cadence = goalState.goals.cadence,
          }, { setSubmitting }) => {
            const updateFriendInput = {
              variables: {
                updateFriendInput: {
                  username,
                  friendId,
                  goals: {
                    targetPhone: parseInt(targetPhone, 10),
                    targetText: parseInt(targetText, 10),
                    targetBeer: parseInt(targetBeer, 10),
                    cadence,
                  },
                },
              },
            };

            try {
              const response = await updateFriend(updateFriendInput);
              const { goals, friendScore } = response.data.updateFriend;
              setGoalState({ goals, friendScore });
              setSubmitting(false);
              onRequestClose();
            } catch (e) {
              if (e.graphQLErrors.length) {
                const errors = e.graphQLErrors.map((error) => error.message);
                console.log('GraphQL errors: ', errors);
                // need to handle error state
                // setErrors({ username, name, form: errors });
                throw Error('Error object did not have graphQLErrors');
              } else {
                console.log('Network error: ', e.networkError);
                // need to handle error state
                // setErrors({ username, name, form: errors });
                throw Error('Error object did not have graphQLErrors');
              }
            }
          }}

          render={() => (
            <Form className="modal-form">
              <div className="modal-form-selects">
                <div className="modal-form-row">
                  <span className="modal-form-cell-label">Phone call goal: </span>
                  <Field
                    defaultValue={goalState.goals.targetPhone.toString()}
                    component="select"
                    name="targetPhone"
                    className="modal-select"
                  >
                    {renderGoalOptions()}
                  </Field>
                </div>
                <div className="modal-form-row">
                  <span className="modal-form-cell-label">Text msg goal: </span>
                  <Field
                    defaultValue={goalState.goals.targetText.toString()}
                    component="select"
                    name="targetText"
                    className="modal-select"
                  >
                    {renderGoalOptions()}
                  </Field>
                </div>
                <div className="modal-form-row">
                  <span className="modal-form-cell-label">Get a beer goal: </span>
                  <Field
                    defaultValue={goalState.goals.targetBeer.toString()}
                    component="select"
                    name="targetBeer"
                    className="modal-select"
                  >
                    {renderGoalOptions()}
                  </Field>
                </div>
                <div className="modal-form-row">
                  <span className="modal-form-cell-label">Timeframe: </span>
                  <Field
                    defaultValue={goalState.goals.cadence}
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
              <button type="submit" className="btn btn-primary modal-btn">
                Save goals
              </button>
            </Form>
          )}
        />
      )}
    </Mutation>
)
};

export default EditGoalsModalContent;
