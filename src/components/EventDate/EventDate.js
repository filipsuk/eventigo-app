/* @flow */
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { capitalize } from '../../utils';
import type { Event } from '../../types';

type Props = {
  event: Event,
  style?: any
};

const EventDate = ({ event, style }: Props) => {
  return <Text style={style}>{capitalize(formatEventDate(event))}</Text>;
};

const formatEventDate = (event: Event): ?string => {
  let date;
  const start = moment(event.start);
  const end = moment(event.end || null);
  if (event.start && !event.end) {
    // Only start time set
    if (start.hour() !== 0) {
      // Start hour set
      date = start.format('dddd D. M. Y H:mm');
    } else {
      // Start hour unknown (00:00)
      date = start.format('dddd D. M. Y');
    }
  } else if (event.start && event.end) {
    // Both start and end set
    if (start.dayOfYear() === end.dayOfYear()) {
      // One day event
      date = start.format('dddd D. M. Y H:mm - ') + end.format('H:mm');
    } else {
      // Multiple days event
      date = start.format('dddd D. M. - ') + end.format('D. M. Y');
    }
  }
  return date;
};

export default EventDate;
