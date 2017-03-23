/* @flow */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EventCard from '../../components/EventCard';
import type { Event } from '../../types';
import type { BookmarksState } from '../../reducers/bookmarks';

type Props = {
  events: Event[],
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
      {events.map(event => {
        return (
          <EventCard
            event={event}
            bookmarked={bookmarks[event.id] || false}
            onPress={onEventPress}
            onBookmarkPress={onBookmarkPress}
            key={event.id}
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
