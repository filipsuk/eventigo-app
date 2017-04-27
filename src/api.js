/* @flow */
import axios from 'axios';
import type { EventsData } from './types/apiData';
import type { $AxiosXHR } from 'axios';
import Config from 'react-native-config';

function fetchApiEvents(): Promise<EventsData> {
  return axios
    .get(`${Config.API_HOST}/api/v1/events`)
    .then((response: $AxiosXHR<EventsData>) => response.data);
}

export { fetchApiEvents };
