import React from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { UPDATE_FRIEND_TARGET_GOALS } from '../../graphql/mutations';

const tenArray = Array.from(Array(10).keys());

const ModalContent = ({
  onRequestClose,
  username,
  id,
  targetGoals,
  cadence,
}) => (
  <Mutation mutation={UPDATE_FRIEND_TARGET_GOALS}>
    {(updateFriendTargetGoals, { data }) => (
      <Formik
        className="modal-form"
        intialValues={{
          phone: targetGoals ? targetGoals.phone : null,
          text: targetGoals ? targetGoals.text : null,
          beer: targetGoals ? targetGoals.beer : null,
          cadence: cadence || '',
        }}

        onSubmit={async ({ phone, text, beer, cadence }, { props, setSubmitting, setErrors }) => {
          const targetGoalsInput = {
            variables: {
              updateFriendTargetGoalsInput: {
                username,
                phone,
                text,
                beer,
                cadence,
                username,
                id, 
              }
            },
          };

          try {
            const response = await updateFriendTargetGoals(targetGoalsInput);
            const updateGoalsData = response.data.updateFriendTargetGoals;
            // TODO 3/16/2020 Use this data to update the UI
            console.log('Boom', updateGoalsData) // eslint-disable-line
            onRequestClose();
          } catch (e) {
            if (e.graphQLErrors) {
              const errors = e.graphQLErrors.map((error) => error.message);
              console.log(errors); // eslint-disable-line
              setSubmitting(false);
              setErrors({ username, name, form: errors });
            } else {
              console.log(e); // eslint-disable-line
              throw Error('Error object did not have graphQLErros');
            }
          }
        }}

        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="modal-form">
            <div className="modal-form-selects">
              <div className="modal-form-row">
                <span className="modal-form-cell-label">How many calls?</span>
                <Field
                  component="select"
                  name="phone"
                  className="modal-select"
                >
                  {
                    tenArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">How many texts?</span>
                <Field
                  component="select"
                  name="text"
                  className="modal-select"
                >
                  {
                    tenArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">How many beers?</span>
                <Field
                  component="select"
                  name="beer"
                  className="modal-select"
                >
                  {
                    tenArray.map((val) => <option value={val} key={val}>{val}</option>)
                  }
                </Field>
              </div>
              <div className="modal-form-row">
                <span className="modal-form-cell-label">How often?</span>
                <Field
                  component="select"
                  name="cadence"
                  className="modal-select"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </Field>
              </div>
            </div>
            <button type="submit" className="btn modal-btn">
              Save goals
            </button>
          </Form>
        )}
      />
    )}
  </Mutation>
);

export default ModalContent;
