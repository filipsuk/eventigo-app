/* @flow */
import type { EventsData } from './types/apiData';

import { mockedEvents } from './mocks/mockedEvents';

function fetchApiEvents(): Promise<EventsData> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        return resolve(mockedEvents);
      },
      2000
    );
  });
}

export { fetchApiEvents };
