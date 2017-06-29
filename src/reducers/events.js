/* @flow */
import { tracker } from '../ga';
import moment from 'moment';

import type { Action } from '../types/actions';
import type { Event } from '../types/model';

export type EventsStateData = { [id: string]: Event };

export type EventsState = {
  data: EventsStateData,
  dataFetched: boolean,
  isFetching: boolean,
  isFetchingInBackground: boolean,
  error: boolean
};

const initialState: EventsState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  isFetchingInBackground: false,
  error: false
};

function events(
  state: EventsState = initialState,
  action: Action
): EventsState {
  switch (action.type) {
    case 'EVENTS_FETCHING_DATA': {
      return {
        ...state,
        isFetching: true,
        isFetchingInBackground: action.background
      };
    }

    case 'EVENTS_FETCHING_DATA_SUCCESS': {
      let newState = {
        ...state,
        data: {},
        isFetching: false,
        isFetchingInBackground: false,
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
      tracker.trackException(
        `EVENTS_FETCHING_DATA_FAILURE: ${action.errorMessage}`
      );
      return {
        ...state,
        isFetching: false,
        isFetchingInBackground: false,
        error: true
      };
    }

    case 'persist/REHYDRATE': {
      const { payload } = action;
      if (payload.events && payload.events.data) {
        return {
          ...state,
          data: removePastEvents(payload.events.data)
        };
      }
      return state;
    }

    default:
      return state;
  }
}

function removePastEvents(eventsData: EventsStateData): EventsStateData {
  let filtered = {};
  Object.keys(eventsData).map(key => {
    const event: Event = eventsData[key];
    if (event.end && moment(event.end).isAfter(moment())) {
      filtered[key] = event;
    } else if (moment(event.start).isAfter(moment().subtract(3, 'hours'))) {
      filtered[key] = event;
    }
  });
  return filtered;
}

export default events;
