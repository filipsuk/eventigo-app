/* @flow */

import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import EventHeader from '../EventHeader';
import Bookmark from '../Bookmark';
import type { Event } from '../../types';

type Props = {
  event: Event,
  bookmarked: boolean,
  onPress?: (Event) => any,
  onBookmarkPress?: (string) => any
};

const EventCard = ({ event, bookmarked, onPress, onBookmarkPress }: Props) => {
  const handlePress = () => {
    if (onPress) {
      onPress(event);
    }
  };

  const handleBookmarkPress = () => {
    if (onBookmarkPress) {
      onBookmarkPress(event.id);
    }
  };

  return (
    <TouchableHighlight onPress={handlePress}>
      <Image source={{ uri: event.image }} style={styles.image}>
        <Bookmark
          active={bookmarked}
          containerStyle={styles.bookmark}
          size={30}
          onPress={handleBookmarkPress}
        />
        <EventHeader event={event} />
      </Image>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  bookmark: {
    position: 'absolute',
    right: 0,
    top: -4
  }
});

export default EventCard;
