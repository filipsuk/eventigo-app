/* @flow */
import React from 'react';
import {
  Text,
  View,
  StyleSheet
 } from 'react-native';
import EventTags from '../EventTags';
import LinearGradient from 'react-native-linear-gradient';

import type { Event } from '../../types';

type Props = {
  event: Event
}

const EventHeader = ({event}: Props) => (
  <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)',]}>
    <View style={styles.container}>
      <Text style={styles.date}>{event.start}</Text>
      <Text style={styles.title}>{event.name}</Text>
      <EventTags tags={event.tags} />
    </View>
  </LinearGradient>
);

const textShadow = {
  textShadowColor: '#000000',
  textShadowRadius: 4,
  textShadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.3
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
    ...textShadow
  },
  date: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '300',
    ...textShadow
  },
});

export default EventHeader;
