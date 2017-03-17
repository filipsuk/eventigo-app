/* @flow */

import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import EventTags from '../../components/EventTags';
import { navigationHeader, fontSizes, colors } from '../../styles';

import type { Event } from '../../types';

type Props = {
  navigation: {
    state: {
      params: {
        event: Event
      }
    }
  }
};

class EventDetail extends React.Component {
  props: Props;

  static navigationOptions = {
    title: ({ state }) => state.params.event.name,
    header: {
      tintColor: navigationHeader.headerTintColor,
      style: {
        backgroundColor: navigationHeader.headerBackgroundColor
      }
    }
  };

  render() {
    const { event } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.title}>
            {event.name}
          </Text>
          <Text style={styles.date}>{event.start}</Text>
          <EventTags tags={event.tags} style={styles.tags} />
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  body: {
    padding: 10
  },
  title: {
    color: colors.dark,
    fontSize: fontSizes.h2,
    fontWeight: '300',
    marginBottom: 5
  },
  date: {
    color: colors.dark,
    fontSize: fontSizes.small,
    fontWeight: '300'
  },
  tags: {
    color: colors.dark,
    marginVertical: 5
  },
  description: {
    color: colors.dark,
    marginVertical: 5
  }
});

export default EventDetail;
