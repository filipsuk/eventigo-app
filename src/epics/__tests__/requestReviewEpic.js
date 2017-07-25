/* @flow */

import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import requestReviewEpic from '../requestReviewEpic';
import { MIN_LAUNCHES, MIN_POSITIVE_EVENTS } from '../requestReviewEpic';
import { ASKED_FOR_REVIEW } from '../../actions/constants';

import type { StatisticsState } from '../../reducers/statistics';

jest.mock('react-native-store-review');
jest.mock('../../ga');

const epicMiddleware = createEpicMiddleware(requestReviewEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('requestReviewEpic', () => {
  let store;

  afterEach(() => {
    epicMiddleware.replaceEpic(requestReviewEpic);
  });

  it('produces asked for review action', () => {
    const statistics: StatisticsState = {
      launches: MIN_LAUNCHES + 1,
      positiveEvents: MIN_POSITIVE_EVENTS + 1,
      requestedReviewDate: null
    };
    store = mockStore({ statistics });
    store.dispatch({ type: 'persist/REHYDRATE' });
    expect(store.getActions()).toEqual([
      { type: 'persist/REHYDRATE' },
      { type: ASKED_FOR_REVIEW }
    ]);
  });

  it('does not produce review when not enough launches', () => {
    const statistics: StatisticsState = {
      launches: MIN_LAUNCHES - 1,
      positiveEvents: MIN_POSITIVE_EVENTS + 1,
      requestedReviewDate: null
    };
    store = mockStore({ statistics });
    store.dispatch({ type: 'persist/REHYDRATE' });
    expect(store.getActions()).toEqual([{ type: 'persist/REHYDRATE' }]);
  });
});
