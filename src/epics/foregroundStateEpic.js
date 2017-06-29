/* @flow */

import { fetchData } from '../actions';
import { FOREGROUND } from 'redux-enhancer-react-native-appstate';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import type { Action } from '../types/actions';

/**
 * Fetch new data when app comes from background mode
 */
const foregroundStateEpic = (action$: Observable<Action>) =>
  action$.ofType(FOREGROUND).mapTo(fetchData(true));

export default foregroundStateEpic;
