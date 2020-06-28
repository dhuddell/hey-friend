import React from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import { UPDATE_FRIEND } from '../../graphql/mutations';

const UpdateFriendModalContent = ({
  onRequestClose,
  props,
}) => {
  const { username, friendId, friendInfoState, setFriendInfoState } = props;
  return (
    <Mutation mutation={UPDATE_FRIEND}>
      {(updateFriend) => (
        <Formik
          className="modal-form"

          onSubmit={async ({
            name = friendInfoState.name,
            description = friendInfoState.description,
            icon = friendInfoState.icon,
          }, { setSubmitting }) => {
            const updateFriendInput = {
              variables: {
                updateFriendInput: {
                  username,
                  friendId,
                  name,
                  description,
                  icon,
                },
              },
            };

            try {
              const response = await updateFriend(updateFriendInput);
              const { name, description, icon } = response.data.updateFriend;
              setFriendInfoState({ name, description, icon });
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
                  <div className="modal-form-cell-label">Name:</div>
                  <Field
                    defaultValue={friendInfoState.name}
                    name="name"
                    required
                    className="modal-select"
                    placeholder="Will Smith"
                  />
                </div>
                <div className="modal-form-row">
                  <div className="modal-form-cell-label">Description:</div>
                  <Field
                    defaultValue={friendInfoState.description}
                    name="description"
                    required
                    className="modal-select"
                    placeholder="He's jiggy with it."
                  />
                </div>
                <div className="modal-form-row">
                  <div className="modal-form-cell-label">Icon:</div>
                  <Field
                    defaultValue={friendInfoState.icon}
                    name="icon"
                    required
                    className="modal-select"
                    placeholder="fa-fail"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary modal-btn">
                Save info
              </button>
            </Form>
          )}
        />
      )}
    </Mutation>
  );
};

export default UpdateFriendModalContent;
