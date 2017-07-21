/* @flow */
import type { Action } from '../types/actions';

function appLaunch(): Action {
  return {
    type: 'APP_LAUNCH'
  };
}

function addPositiveEvent(): Action {
  return {
    type: 'ADD_POSITIVE_EVENT'
  };
}

function askedForReview(): Action {
  return {
    type: 'ASKED_FOR_REVIEW'
  };
}

export { appLaunch, addPositiveEvent, askedForReview };
