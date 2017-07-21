/* @flow */

import 'react-native';
import React from 'react';
import EventDetail from '../EventDetail';
import configureStore from '../../configureStore';
import eventsReducer from '../../reducers/events';
import { fetchDataSuccess } from '../../actions/events';
import { mockedEvents } from '../../__mocks__/data/mockedEvents';
import { Provider } from 'react-redux';
import Config from 'react-native-config';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import type { RootState } from '../../reducers';

let store;

beforeAll(() => {
  Config.HOME_COUNTRY = 'CZ';
  const initialState: RootState = {
    events: eventsReducer(undefined, fetchDataSuccess(mockedEvents)),
    bookmarks: {},
    statistics: {
      launches: 0,
      requestedReviewDate: null,
      positiveEvents: 0
    }
  };
  store = configureStore(initialState);
});

it('renders correctly with home country event', () => {
  const navProp = {
    state: {
      params: {
        event: mockedEvents[0]
      }
    }
  };
  const tree = renderTree(store, navProp);
  expect(tree).toMatchSnapshot();
});

it('renders correctly with foreign country event', () => {
  const navProp = {
    state: {
      params: {
        event: mockedEvents[4]
      }
    }
  };
  const tree = renderTree(store, navProp);
  expect(tree).toMatchSnapshot();
});

const renderTree = (storeWithEvent, navProp) => {
  return renderer.create(
    <Provider store={storeWithEvent}>
      <EventDetail navigation={navProp} />
    </Provider>
  );
};
