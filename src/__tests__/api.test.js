/* @flow */
import { fetchApiEvents } from '../api';
import fetchMock from 'fetch-mock';
import { mockedEvents } from '../__mocks__/data/mockedEvents';

describe('API', () => {
  it('fetches events', () => {
    fetchMock.get('end:api/v1/events', mockedEvents);
    return fetchApiEvents().then(response => {
      expect(response).toEqual(mockedEvents);
    });
  });
});
