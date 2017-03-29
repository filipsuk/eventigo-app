/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { fetchEventsEpic } from './epics';

const middlewares = [createEpicMiddleware(fetchEventsEpic)];
const enhancers = composeWithDevTools(
  {
    // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
  }
)(applyMiddleware(...middlewares));

export default function configureStore(initialState: any = {}) {
  const store = createStore(reducers, initialState, enhancers);

  // Allow reducers hot reloading
  if (module.hot) {
    //$FlowFixMe
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}
