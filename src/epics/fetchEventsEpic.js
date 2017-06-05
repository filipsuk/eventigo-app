/* @flow */

import { fetchDataSuccess, fetchDataFailure } from '../actions';
import { fetchApiEvents } from '../api';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import type { Action, ActionTypes } from '../types/actions';

const fetchEventsEpic = (action$: Observable<Action>) =>
  action$
    .ofType(('EVENTS_FETCHING_DATA': ActionTypes))
    .mergeMap(action =>
      Observable.fromPromise(fetchApiEvents())
        .map(response => fetchDataSuccess(response))
        .catch(error => Observable.of(fetchDataFailure(error)))
    );

export default fetchEventsEpic;
