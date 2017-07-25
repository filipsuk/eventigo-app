/* @flow */

import statisticsReducer from '../statistics';
import { appLaunch, addPositiveEvent, askedForReview } from '../../actions';

import type { StatisticsState } from '../statistics';
import type { Action } from '../../types/actions';

describe('statistics reducer', () => {
  const initialState: StatisticsState = {
    launches: 0,
    requestedReviewDate: null,
    positiveEvents: 0 // positive user interaction with app, used as condition when asking for review
  };

  it('has initial empty state', () => {
    expect(statisticsReducer(undefined, ({}: any))).toEqual(initialState);
  });

  it('adds app run', () => {
    const action: Action = appLaunch();
    expect(statisticsReducer(initialState, action)).toHaveProperty(
      'launches',
      initialState.launches + 1
    );
  });

  it('adds positive event', () => {
    const action: Action = addPositiveEvent();
    expect(statisticsReducer(initialState, action)).toHaveProperty(
      'positiveEvents',
      initialState.positiveEvents + 1
    );
  });

  it('adds asked for review date', () => {
    const action: Action = askedForReview();
    expect(statisticsReducer(initialState, action)).toHaveProperty(
      'requestedReviewDate'
    );
  });

  it('merges statistics after rehydration', () => {
    const stateBefore: StatisticsState = {
      ...initialState,
      launches: 1,
      positiveEvents: 2
    };
    const action = {
      type: 'persist/REHYDRATE',
      payload: {
        events: {
          data: {},
          dataFetched: false,
          isFetching: false,
          isFetchingInBackground: false,
          error: false
        },
        bookmarks: {},
        statistics: {
          launches: 4,
          requestedReviewDate: null,
          positiveEvents: 3
        }
      }
    };
    expect(statisticsReducer(stateBefore, action)).toMatchObject({
      positiveEvents:
        stateBefore.positiveEvents + action.payload.statistics.positiveEvents,
      launches: stateBefore.launches + action.payload.statistics.launches
    });
  });

  it('does not fail without statistics payload', () => {
    const action = {
      type: 'persist/REHYDRATE',
      payload: {
        events: {
          data: {},
          dataFetched: false,
          isFetching: false,
          isFetchingInBackground: false,
          error: false
        },
        bookmarks: {}
      }
    };
    expect(statisticsReducer(initialState, action)).toEqual(initialState);
  });
});
