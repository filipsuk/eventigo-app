/* @flow */

import 'react-native';
import React from 'react';
import EventDetail from '../EventDetail';
import configureStore from '../../configureStore';
import eventsReducer from '../../reducers/events';
import { fetchDataSuccess } from '../../actions/events';
import { mockedEvents } from '../../__mocks__/data/mockedEvents';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import type { RootState } from '../../reducers';

it('renders correctly', () => {
  const initialState: RootState = {
    events: eventsReducer(undefined, fetchDataSuccess(mockedEvents)),
    bookmarks: {}
  };
  let store = configureStore(initialState);

  const navProp = {
    state: {
      params: {
        event: mockedEvents[0]
      }
    }
  };

  const tree = renderer.create(
    <Provider store={store}>
      <EventDetail navigation={navProp} />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
