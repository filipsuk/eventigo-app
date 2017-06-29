/* @flow */

import eventsReducer from '../events';
import { mockedEvents } from '../../__mocks__/data/mockedEvents';
import moment from 'moment';

import type { EventsState } from '../events';
import type { EventsData } from '../../types/apiData';
import type { Action } from '../../types/actions';
import type { Event } from '../../types/model';

describe('events reducer', () => {
  const initialState: EventsState = {
    data: {},
    dataFetched: false,
    isFetching: false,
    isFetchingInBackground: false,
    error: false
  };

  it('has initial empty state', () => {
    expect(eventsReducer(undefined, ({}: any))).toEqual(initialState);
  });

  it('adds fetched events', () => {
    const events: EventsData = mockedEvents;
    const action: Action = {
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

  it('filters past events', () => {
    jest.unmock('moment');
    const pastEvent: Event = {
      id: '1',
      name: 'Past event',
      description: null,
      url: 'https://example.org',
      start: moment().subtract(2, 'days').toISOString(),
      image: 'https://example.org'
    };
    const currentEvent: Event = {
      id: '2',
      name: 'Current event',
      description: null,
      url: 'https://example.org',
      start: moment().subtract(1, 'hours').toISOString(),
      end: moment().add(1, 'hours').toISOString(),
      image: 'https://example.org'
    };
    const futureEvent: Event = {
      id: '3',
      name: 'Future event',
      description: null,
      url: 'https://example.org',
      start: moment().add(2, 'days').toISOString(),
      image: 'https://example.org'
    };
    const action: Action = {
      type: 'persist/REHYDRATE',
      payload: {
        events: {
          data: {
            '1': pastEvent,
            '2': currentEvent,
            '3': futureEvent
          },
          dataFetched: false,
          isFetching: false,
          isFetchingInBackground: false,
          error: false
        },
        bookmarks: {}
      }
    };

    expect(eventsReducer(undefined, action)).toEqual(
      ({
        data: {
          '2': currentEvent,
          '3': futureEvent
        },
        dataFetched: false,
        isFetching: false,
        isFetchingInBackground: false,
        error: false
      }: EventsState)
    );
  });
});
