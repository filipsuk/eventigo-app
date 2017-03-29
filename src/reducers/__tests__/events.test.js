/* @flow */

import eventsReducer from '../events';
import { mockedEvents } from '../../__mocks__/data/mockedEvents';

import type { EventsState } from '../events';
import type { EventsData } from '../../types/apiData';

describe('events reducer', () => {
  const initialState: EventsState = {
    data: {},
    dataFetched: false,
    isFetching: false,
    error: false
  };

  it('has initial empty state', () => {
    expect(eventsReducer(undefined, ({}: any))).toEqual(initialState);
  });

  it('adds fetched events', () => {
    const events: EventsData = mockedEvents;
    const action = {
      type: 'EVENTS_FETCHING_DATA_SUCCESS',
      data: events
    };

    // Number of added events match
    expect(Object.keys(eventsReducer(undefined, action).data)).toHaveLength(
      mockedEvents.length
    );

    // Structure of data object (id as key)
    expect(eventsReducer(undefined, action).data[mockedEvents[0].id]).toEqual(
      mockedEvents[0]
    );

    expect(eventsReducer(undefined, action)).toMatchObject({
      dataFetched: true,
      isFetching: false,
      error: false
    });
  });
});
