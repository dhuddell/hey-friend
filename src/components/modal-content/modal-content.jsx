import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { UPDATE_FRIEND_TARGET_GOALS } from '../../graphql/mutations';

const tenArray = Array.from(Array(10).keys());

const ModalContent = ({
  onRequestClose,
  username,
  friendId,
  targetGoals,
  cadence,
}) => (
  <Mutation mutation={UPDATE_FRIEND_TARGET_GOALS} >
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
            variables:
          {
            targetGoalValues: {
              phone,
              text,
              beer,
              cadence,
            },
            username,
            friendId,
          },
          };

          try {
            const response = await updateFriendTargetGoals(targetGoalsInput);
            console.log('Woot! ', response) // eslint-disable-line
            onRequestClose();
          } catch (e) {
            if (e.graphQLErrors) {
              const errors = e.graphQLErrors.map((error) => error.message);
              console.log(errors); // eslint-disable-line
              setSubmitting(false);
              setErrors({ username, friendId, form: errors });
            } else {
              console.log(e); // eslint-disable-line
              throw Error('Error object did not have graphQLErros');
            }
          }
        }}

        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="modal-form-selects">
              <div className="modal-form-row">
                <div className="modal-form-cell">
                  <p className="modal-form-cell-label">How many calls?</p> {/* PHONEPHONEPHONEPHONEPHONE */}
                  <Field
                    component="select"
                    name="phone"
                    className="modal-select"
                  >
                    {
                      tenArray.map((val) => <option value={val} key={val}>{val}</option> )
                    }
                  </Field>
                </div>
                <div className="modal-form-cell">
                  <p className="modal-form-cell-label">How many texts?</p> {/* TEXT TEXT TEXT TEXT TEXT */}
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
              </div>
              <div className="modal-form-row">
                <div className="modal-form-cell">
                  <p className="modal-form-cell-label">How many beers?</p> {/* BEEEEEEEEEEEER */}
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
                <div className="modal-form-cell">
                  <p className="modal-form-cell-label">How often?</p> {/* CADENCE */}
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

ModalContent.propTypes = {
  goalSetCollection: PropTypes.shape({
    targetGoals: PropTypes.object,
    cadence: PropTypes.string,
  }),
  username: PropTypes.string,
  friendId: PropTypes.string,
};

export default ModalContent;
