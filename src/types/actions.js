/* @flow */
import type { EventsData } from './apiData';
import type { RootState } from '../reducers';

export type ActionTypes =
  | 'TOGGLE_BOOKMARK'
  | 'EVENTS_FETCHING_DATA'
  | 'EVENTS_FETCHING_DATA_SUCCESS'
  | 'EVENTS_FETCHING_DATA_FAILURE'
  | 'ADD_LAUNCH'
  | 'ADD_POSITIVE_EVENT'
  | 'ASKED_FOR_REVIEW';

type ToggleBookmarkAction = { type: 'TOGGLE_BOOKMARK', id: string };

type FetchEventsAction = { type: 'EVENTS_FETCHING_DATA', background: boolean };

type FetchEventsSuccessAction = {
  type: 'EVENTS_FETCHING_DATA_SUCCESS',
  data: EventsData
};

type FetchEventsFailAction = {
  type: 'EVENTS_FETCHING_DATA_FAILURE',
  errorMessage: any
};

type RehydrateAction = { type: 'persist/REHYDRATE', payload: RootState };

type AppLaunchAction = { type: 'APP_LAUNCH' };
type AddPositiveEventAction = { type: 'ADD_POSITIVE_EVENT' };
type AskedForReviewAction = { type: 'ASKED_FOR_REVIEW' };

export type Action =
  | ToggleBookmarkAction
  | FetchEventsAction
  | FetchEventsSuccessAction
  | FetchEventsFailAction
  | RehydrateAction
  | AppLaunchAction
  | AddPositiveEventAction
  | AskedForReviewAction;
