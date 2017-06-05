/* @flow */
import type { Action } from '../types/actions';
import { TOGGLE_BOOKMARK } from '../actions/constants';
import { tracker } from '../ga';

export type BookmarksState = { [id: string]: boolean };

function bookmarks(state: BookmarksState = {}, action: Action): BookmarksState {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      tracker.trackEvent('Bookmarks', 'Toggle bookmark');
      return { ...state, [action.id]: state[action.id] ? false : true };

    default:
      return state;
  }
}

export default bookmarks;
