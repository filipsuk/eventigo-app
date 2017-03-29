/* @flow */
import { mockedEvents } from './data/mockedEvents';
import type { EventsData } from '../types/apiData';

const fetchApiEvents = (): Promise<EventsData> => {
  return Promise.resolve(mockedEvents);
};

export { fetchApiEvents };
