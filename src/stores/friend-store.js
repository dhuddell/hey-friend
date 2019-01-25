

import { action, observable } from 'mobx';
import apolloClient from '../graphql/apollo-client';
import { UpdateFriendGoals } from '../graphql/mutations';


export default class FriendStore {
  @observable goals = [];

  @observable goalTargets = [];
  @observable cadence = '';

  @action updateGoals = ({ id, goals }) => {
    try {
      apolloClient.mutation({
        mutation: UpdateFriendGoals,
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


// THIS IS SUPER WIP. LIKE HOLY SHIT IT NEEDS WORK
