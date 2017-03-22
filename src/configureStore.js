/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middlewares = [];
const enhancers = composeWithDevTools(
  {
    // Options: https://github.com/jhen0409/react-native-debugger#options
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
