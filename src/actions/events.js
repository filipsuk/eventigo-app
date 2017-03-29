/* @flow */

import type { Action } from '../types/actions';

export function fetchData(): Action {
  return {
    type: 'EVENTS_FETCHING_DATA'
  };
}

export function fetchDataSuccess(data: any): Action {
  return {
    type: 'EVENTS_FETCHING_DATA_SUCCESS',
    data
  };
}

export function fetchDataFailure(error: any): Action {
  return {
    type: 'EVENTS_FETCHING_DATA_FAILURE',
    errorMessage: error
  };
}
