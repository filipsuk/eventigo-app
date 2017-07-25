/* @flow */

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as StoreReview from 'react-native-store-review';
import { askedForReview } from '../actions';
import moment from 'moment';
import { tracker } from '../ga';

import type { Action } from '../types/actions';
import type { StatisticsState } from '../reducers/statistics';

const MIN_LAUNCHES = 3;
const MIN_POSITIVE_EVENTS = 2;
const WEEKS_BETWEEN_ASKING = 2;

/**
 * Request app review when appropriate
 */
const requestReviewEpic = (action$: Observable<Action>, store: any) =>
  action$
    .ofType('persist/REHYDRATE')
    .filter(() => canRequestReview(store.getState().statistics))
    .do(() => {
      requestReview();
    })
    .mapTo(askedForReview());

const canRequestReview = (statistics: StatisticsState): boolean => {
  return (
    StoreReview.isAvailable &&
    statistics.launches >= MIN_LAUNCHES &&
    statistics.positiveEvents >= MIN_POSITIVE_EVENTS &&
    !recentlyAskedForReview(statistics)
  );
};

const recentlyAskedForReview = (statistics: StatisticsState): boolean => {
  if (statistics.requestedReviewDate === null) {
    return false;
  }
  return moment(statistics.requestedReviewDate)
    .add(WEEKS_BETWEEN_ASKING, 'w')
    .isAfter(moment());
};

const requestReview = () => {
  if (StoreReview.isAvailable) {
    console.log('Trying to ask for review');
    StoreReview.requestReview();
    tracker.trackEvent('Rating', 'Tried asking for review');
  } else {
    console.log('StoreReview not available');
  }
};

export default requestReviewEpic;
export { MIN_LAUNCHES, MIN_POSITIVE_EVENTS, WEEKS_BETWEEN_ASKING };
