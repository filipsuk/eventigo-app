/* @flow */
import { combineReducers } from 'redux';
import events from './events';
import bookmarks from './bookmarks';

export default combineReducers({
  events,
  bookmarks
});
