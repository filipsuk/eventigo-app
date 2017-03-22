/* @flow */
import { TOGGLE_BOOKMARK } from './constants';
import type { Action } from './types';

function toggleBookmark(id: number): Action {
  return {
    type: TOGGLE_BOOKMARK,
    id: id.toString()
  };
}

export { toggleBookmark };
