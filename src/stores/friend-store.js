

import { action, observable } from 'mobx';
import apolloClient from '../graphql/apollo-client';
import { UpdateTargetFriendGoals } from '../graphql/mutations';


export default class FriendStore {
  @observable goals = [];

  @observable goalTargets = [];
  @observable cadence = '';

  @observable submitted = false;
  @observable submitting = false;

  @observable formFields = {
    phoneGoal: 0,
    textGoal: 0,
    beerGoal: 0,
    cadence: null,
  };

  @action updateFormFields = ({ key, value }) => { this.formFields[key] = value; };

  @action updateGoals = ({ id, goals }) => {
    try {
      apolloClient.mutate({
        mutation: UpdateTargetFriendGoals,
        variables: {
          id,
          goals,
        },
      });
    } catch (error) {
      console.log('Error', error.message); // eslint-disable-line
    }
  }
}
