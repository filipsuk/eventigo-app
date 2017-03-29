/* @flow */
import type { Action } from '../types/actions';
import type { Event } from '../types/model';

export type EventsState = {
  data: { [id: string]: Event },
  dataFetched: boolean,
  isFetching: boolean,
  error: boolean
};

const initialState: EventsState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false
};

function events(
  state: EventsState = initialState,
  action: Action
): EventsState {
  switch (action.type) {
    case 'EVENTS_FETCHING_DATA': {
      return { ...state, isFetching: true };
    }

    case 'EVENTS_FETCHING_DATA_SUCCESS': {
      let newState = {
        ...state,
        isFetching: false,
        dataFetched: true,
        error: false
      };
      action.data.map(event => {
        newState.data = { ...newState.data, [event.id]: event };
      });
      return newState;
    }

    case 'EVENTS_FETCHING_DATA_FAILURE': {
      console.error(action.errorMessage);
      return { ...state, isFetching: false, error: true };
    }

    default:
      return state;
  }
}

export default events;
