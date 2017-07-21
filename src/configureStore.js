/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import {
  fetchEventsEpic,
  foregroundStateEpic,
  requestReviewEpic
} from './epics';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';

const rootEpic = combineEpics(
  fetchEventsEpic,
  foregroundStateEpic,
  requestReviewEpic
);
const middlewares = [createEpicMiddleware(rootEpic)];
const enhancers = composeWithDevTools(
  {
    // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
  }
)(applyAppStateListener(), applyMiddleware(...middlewares), autoRehydrate());

export default function configureStore(initialState: any = {}) {
  const store = createStore(reducers, initialState, enhancers);

  // Get stored state, fire a rehydrate action, and begin persisting redux state
  persistStore(store, { storage: AsyncStorage }, () => {
    console.log('Redux store restored');
  });

  // Allow reducers hot reloading
  if (module.hot) {
    //$FlowFixMe
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}
