/* @flow */
import { combineReducers } from 'redux';
import events from './events';
import bookmarks from './bookmarks';
import statistics from './statistics';

import type { EventsState } from './events';
import type { BookmarksState } from './bookmarks';
import type { StatisticsState } from './statistics';

export type RootState = {
  events: EventsState,
  bookmarks: BookmarksState,
  statistics?: StatisticsState
};

export default combineReducers({
  events,
  bookmarks,
  statistics
});
