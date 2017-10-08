/* @flow */
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';
import { Alert, Linking } from 'react-native';

import type { Event } from './types/model';

const capitalize = (string: ?string): string => {
  if (string && string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return '';
  }
};

const addEventToCalendar = (event: Event) => {
  // todo move this to utils or somewhere else, maybe also openUrl
  const format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ';
  const start = moment(event.start).format(format);
  const end = moment(event.end || null).format(format);
  const eventConfig = {
    title: event.name,
    startDate: start,
    endDate: end,
    url: event.url,
    notes: event.description
  };

  AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
    .then(eventId => {
      //handle success (receives event id) or dismissing the modal (receives false)
      if (eventId) {
        Alert.alert('Úspěšně uloženo');
      } else {
        console.warn('dismissed');
      }
    })
    .catch((error: string) => {
      // handle error such as when user rejected permissions
      Alert.alert(
        'Uložení do kalendáře se nezdařilo',
        'Zkontrolujte oprávnění ke kalendáři.'
      );
      console.warn(error);
    });
};

/**
  * Open URL in browser
  */
const openUrl = async (url: string): Promise<any> => {
  // TODO: if facebook, open in app with uri like fb://event?id=258779314553712
  if (await await Linking.canOpenURL(url)) {
    return Linking.openURL(url).catch(err => {
      Alert.alert('Chyba', `Nepodařilo se otevřít url ${url}`);
      throw 'Error opening link:' + err;
    });
  } else {
    Alert.alert('Chyba', `Nepodařilo se otevřít url ${url}`);
    throw "Don't know how to open URI: " + url;
  }
};

const tomorrow = moment().add(1, 'days').startOf('day');
const eventDateSections = {
  today: (event: Event | any): boolean =>
    moment(event.start).isSame(moment(), 'day'),

  tomorrow: (event: Event | any): boolean =>
    moment(event.start).isSame(tomorrow, 'day'),

  thisWeek: (event: Event | any): boolean =>
    moment(event.start).isSame(moment(), 'week') &&
    moment(event.start).isSameOrAfter(tomorrow.endOf('day')),

  nextWeek: (event: Event | any): boolean =>
    moment(event.start).isAfter(tomorrow.endOf('day')) &&
    moment(event.start).isBetween(
      moment().endOf('week'),
      moment().add(1, 'w').endOf('week')
    ),

  thisMonth: (event: Event | any): boolean =>
    moment(event.start).isBetween(
      moment().add(1, 'w').endOf('week'),
      moment().endOf('month')
    ),

  next: (event: Event | any): boolean =>
    moment(event.start).isAfter(moment().endOf('month')) &&
    moment(event.start).isAfter(moment().add(1, 'w').endOf('week'))
};

export { capitalize, addEventToCalendar, openUrl, eventDateSections };
