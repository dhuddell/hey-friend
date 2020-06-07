import React from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { UPDATE_FRIEND_GOALS } from '../../graphql/mutations';

const twentyArray = Array.from(Array(21).keys());

const ModalContent = ({
  onRequestClose,
  username,
  friendId,
  setGoalState,
  goalState,
}) => (
  <Mutation mutation={UPDATE_FRIEND_GOALS}>
    {(updateFriend, { data }) => (
      <Formik
        className="modal-form"
        // this initialization isn't working
        // intialValues={{
        //   targetPhone: goalState.targetPhone.toString(),
        //   targetText: goalState.targetText.toString(),
        //   targetBeer: goalState.targetBeer.toString(),
        //   cadence: goalState.cadence,
        // }}

        onSubmit={async ({
          targetPhone = goalState.targetPhone.toString(),
          targetText = goalState.targetText.toString(),
          targetBeer = goalState.targetBeer.toString(),
          cadence = goalState.cadence,
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
            const { goals } = response.data.updateFriend;
            setGoalState(goals);
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

        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="modal-form">
            <div className="modal-form-selects">
              <div className="modal-form-row">
                <span className="modal-form-cell-label">Phone call goal: </span>
                <Field
                  defaultValue={goalState.targetPhone.toString()}
                  component="select"
                  name="targetPhone"
                  className="modal-select"
                >
                  {
                    twentyArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">Text message goal: </span>
                <Field
                  defaultValue={goalState.targetText.toString()}
                  component="select"
                  name="targetText"
                  className="modal-select"
                >
                  {
                    twentyArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">Get a beer goal: </span>
                <Field
                  defaultValue={goalState.targetBeer.toString()}
                  component="select"
                  name="targetBeer"
                  className="modal-select"
                >
                  {
                    twentyArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">Length of time: </span>
                <Field
                  defaultValue={goalState.cadence}
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
);

export default ModalContent;
