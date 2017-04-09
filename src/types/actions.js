/* @flow */
import type { EventsData } from './apiData';

export type ActionTypes =
  | 'TOGGLE_BOOKMARK'
  | 'EVENTS_FETCHING_DATA'
  | 'EVENTS_FETCHING_DATA_SUCCESS'
  | 'EVENTS_FETCHING_DATA_FAILURE';

type ToggleBookmarkAction = { type: 'TOGGLE_BOOKMARK', id: string };

type FetchEventsAction = { type: 'EVENTS_FETCHING_DATA' };

type FetchEventsSuccessAction = {
  type: 'EVENTS_FETCHING_DATA_SUCCESS',
  data: EventsData
};

type FetchEventsFailAction = {
  type: 'EVENTS_FETCHING_DATA_FAILURE',
  errorMessage: any
};

export type Action =
  | ToggleBookmarkAction
  | FetchEventsAction
  | FetchEventsSuccessAction
  | FetchEventsFailAction;
