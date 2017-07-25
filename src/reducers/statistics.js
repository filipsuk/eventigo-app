/* @flow */
import type { Action } from '../types/actions';
import {
  APP_LAUNCH,
  ADD_POSITIVE_EVENT,
  ASKED_FOR_REVIEW
} from '../actions/constants';
import 'redux';
import moment from 'moment';

export type StatisticsState = {
  launches: number,
  requestedReviewDate: ?string,
  positiveEvents: number
};

const initialState: StatisticsState = {
  launches: 0,
  requestedReviewDate: null,
  positiveEvents: 0 // positive user interaction with app, used as condition when asking for review
};

function statistics(
  state: StatisticsState = initialState,
  action: Action
): StatisticsState {
  switch (action.type) {
    case APP_LAUNCH:
      return { ...state, launches: state.launches + 1 };

    case ADD_POSITIVE_EVENT:
      return { ...state, positiveEvents: state.positiveEvents + 1 };

    case ASKED_FOR_REVIEW:
      return { ...state, requestedReviewDate: moment() };

    // APP_LAUNCH action fires before rehydrate so number of launches has to be merged, not replaced
    case 'persist/REHYDRATE': {
      const { payload } = action;
      if (payload.statistics && payload.statistics.launches !== null) {
        return {
          ...state,
          ...payload.statistics,
          launches: state.launches + payload.statistics.launches,
          positiveEvents:
            state.positiveEvents + payload.statistics.positiveEvents
        };
      }
      return state;
    }

    default:
      return state;
  }
}

export default statistics;
