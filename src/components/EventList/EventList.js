/* @flow */
import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  SectionList
} from 'react-native';
import { Icon } from 'react-native-elements';
import EventCard from '../../components/EventCard';
import { colors, fontSizes } from '../../styles';
import { eventDateUtils } from '../../utils';
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
  const renderListItem = ({ item }) => {
    return (
      <EventCard
        event={item}
        bookmarked={bookmarks[item.id] || false}
        onPress={onEventPress}
        onBookmarkPress={onBookmarkPress}
        key={item.id}
      />
    );
  };

  const renderSectionHeader = ({ section }) =>
    <Text style={styles.listHeader}>
      {section.key}
    </Text>;

  const mapEventsToSections = (eventsState: EventsState) => {
    const eventsArr = Object.values(eventsState.data);
    const sections = [
      {
        data: eventsArr.filter(event => eventDateUtils.eventIsToday(event)),
        key: 'Dnes'
      },
      {
        data: eventsArr.filter(event => eventDateUtils.eventIsTomorrow(event)),
        key: 'Zítra'
      },
      {
        data: eventsArr.filter(event => eventDateUtils.eventIsThisWeek(event)),
        key: 'Tento týden'
      },
      {
        data: eventsArr.filter(event => eventDateUtils.eventIsNextWeek(event)),
        key: 'Příští týden'
      },
      {
        data: eventsArr.filter(event => eventDateUtils.eventIsThisMonth(event)),
        key: 'Tento měsíc'
      },
      {
        data: eventsArr.filter(event =>
          eventDateUtils.eventIsAfterThisMonth(event)
        ),
        key: 'Další'
      }
    ];
    return sections.filter(section => section.data.length);
  };

  return (
    <View>
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
        !!Object.keys(events.data).length &&
        <SectionList
          renderItem={renderListItem}
          renderSectionHeader={renderSectionHeader}
          sections={mapEventsToSections(events)}
          refreshing={events.isFetching && !events.isFetchingInBackground}
          stickySectionHeadersEnabled={true}
        />}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  listHeader: {
    color: colors.white,
    backgroundColor: colors.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: fontSizes.smaller
  }
});

export default EventList;
