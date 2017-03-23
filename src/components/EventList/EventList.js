/* @flow */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EventCard from '../../components/EventCard';
import type { Event } from '../../types';
import type { EventsState } from '../../reducers/events';
import type { BookmarksState } from '../../reducers/bookmarks';

type Props = {
  events: EventsState,
  bookmarks?: BookmarksState,
  onEventPress: (Event) => any,
  onBookmarkPress: (string) => any
};

const EventList = (
  { events, bookmarks = {}, onEventPress, onBookmarkPress }: Props
) => {
  // TODO: Use FlatList after upgrade to RN 0.43
  return (
    <ScrollView style={styles.container}>
      {Object.keys(events).map(id => {
        return (
          <EventCard
            event={events[id]}
            bookmarked={bookmarks[id] || false}
            onPress={onEventPress}
            onBookmarkPress={onBookmarkPress}
            key={id}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default EventList;
