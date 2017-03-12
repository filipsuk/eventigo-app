/* @flow */

import React from 'react';
import {
  Image,
  StyleSheet
 } from 'react-native';
import EventHeader from '../EventHeader';
import type { Event } from '../../types';

type Props = {
  event: Event
}

const EventCard = ({event}: Props) => (
    <Image source={{uri: event.image}} style={styles.image}>
      <EventHeader title={event.name} date={event.start} />
    </Image>
);

const styles = StyleSheet.create({
  image: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
});

export default EventCard;
