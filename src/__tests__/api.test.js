/* @flow */
import { fetchApiEvents } from '../api';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import { mockedEvents } from '../__mocks__/data/mockedEvents';

describe('API', () => {
  it('fetches events', () => {
    let mock = new axiosMock(axios);
    mock.onGet(/\/api\/v1\/events$/).reply(200, mockedEvents);
    return fetchApiEvents().then(response => {
      expect(response).toEqual(mockedEvents);
    });
  });
});
