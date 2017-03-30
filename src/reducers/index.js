/* @flow */
import { combineReducers } from 'redux';
import events from './events';
import bookmarks from './bookmarks';

import type { EventsState } from './events';
import type { BookmarksState } from './bookmarks';

export type RootState = {
  events: EventsState,
  bookmarks: BookmarksState
};

export default combineReducers({
  events,
  bookmarks
});
