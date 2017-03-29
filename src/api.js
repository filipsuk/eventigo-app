/* @flow */
import { mockedEvents } from './mocks/mockedEvents';

import type { EventsData } from './types/apiData';

const host = 'https://private-6e9cf6-eventigo.apiary-mock.com/';
const useLocalMock = false;

function fetchApiEvents(): Promise<EventsData> {
  if (useLocalMock) {
    return localMock();
  }

  return fetch(`${host}api/v1/events`).then(response => response.json());
}

const localMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        return resolve(mockedEvents);
      },
      1000
    );
  });
};

export { fetchApiEvents };
