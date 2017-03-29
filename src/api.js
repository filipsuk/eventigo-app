/* @flow */
import type { EventsData } from './types/apiData';

const host = 'https://private-6e9cf6-eventigo.apiary-mock.com/';

function fetchApiEvents(): Promise<EventsData> {
  return fetch(`${host}api/v1/events`).then(response => response.json());
}

export { fetchApiEvents };
