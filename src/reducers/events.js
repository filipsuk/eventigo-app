/* @flow */
import type { Action } from '../types/actions';
import type { Event } from '../types/model';

export type EventsState = { [id: string]: Event };

let initialState: EventsState = {};

// Transform mocked events array to object

function events(
  state: EventsState = initialState,
  action: Action
): EventsState {
  switch (action.type) {
    case 'EVENTS_FETCHING_DATA_SUCCESS': {
      let newState = {};
      action.data.map(event => {
        newState = { ...newState, [event.id]: event };
      });
      return newState;
    }

    default:
      return state;
  }
}

export default events;
