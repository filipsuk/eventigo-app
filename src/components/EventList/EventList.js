/* @flow */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EventCard from '../../components/EventCard';
import type { Event } from '../../types';

type Props = {
  events: Event[],
  onEventPress: Function
};

const EventList = ({ events, onEventPress }: Props) => {
  // TODO: Use FlatList after upgrade to RN 0.43
  return (
    <ScrollView style={styles.container}>
      {events.map(event => {
        return (
          <EventCard event={event} onPress={onEventPress} key={event.id} />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default EventList;
