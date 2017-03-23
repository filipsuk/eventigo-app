/* @flow */
import type { Action } from '../types/actions';
import { TOGGLE_BOOKMARK } from '../actions/constants';

export type BookmarksState = { [id: string]: boolean };

function bookmarks(state: BookmarksState = {}, action: Action): BookmarksState {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      return { ...state, [action.id]: state[action.id] ? false : true };

    default:
      return state;
  }
}

export default bookmarks;
