/* @flow */
import { mockedEvents } from '../mocks/mockedEvents';
import type { Action } from '../types/actions';
import type { Event } from '../types/model';

export type EventsState = { [id: string]: Event };

let initialState: EventsState = {};

// Transform mocked events array to object
mockedEvents.map(event => {
  initialState = { ...initialState, [event.id]: event };
});

function events(
  state: EventsState = initialState,
  action: Action
): EventsState {
  return state;
}

export default events;
