/* @flow */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import EventCard from '../../components/EventCard';
import { colors } from '../../styles';
import type { Event } from '../../types/model';
import type { EventsState } from '../../reducers/events';
import type { BookmarksState } from '../../reducers/bookmarks';

type Props = {
  events: EventsState,
  bookmarks?: BookmarksState,
  onEventPress: Event => any,
  onBookmarkPress: string => any
};

const EventList = ({
  events,
  bookmarks = {},
  onEventPress,
  onBookmarkPress
}: Props) => {
  // TODO: Use FlatList after upgrade to RN 0.43
  return (
    <ScrollView style={styles.container}>
      {events.isFetching &&
        !events.isFetchingInBackground &&
        <ActivityIndicator style={styles.loader} />}

      {events.error &&
        <View style={styles.error}>
          <Icon
            name="error"
            color={colors.dark}
            containerStyle={styles.errorIcon}
          />
          <Text>Chyba načítání</Text>
        </View>}

      {events.data &&
        Object.keys(events.data).map(id => {
          return (
            <EventCard
              event={events.data[id]}
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
  container: {},
  loader: {
    margin: 30
  },
  error: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 30
  },
  errorIcon: {
    marginRight: 5
  }
});

export default EventList;
