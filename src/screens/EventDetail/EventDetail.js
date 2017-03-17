/* @flow */

import React from 'react';
import { View, Text } from 'react-native';
import { navigationHeader } from '../../styles';

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
    return (
      <View>
        <Text>{this.props.navigation.state.params.event.name}</Text>
      </View>
    );
  }
}

export default EventDetail;
