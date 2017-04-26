/* @flow */
import axios from 'axios';
import type { EventsData } from './types/apiData';
import type { $AxiosXHR } from 'axios';

const host = 'https://private-6e9cf6-eventigo.apiary-mock.com/';

function fetchApiEvents(): Promise<EventsData> {
  return axios
    .get(`${host}api/v1/events`)
    .then((response: $AxiosXHR<EventsData>) => response.data);
}

export { fetchApiEvents };
