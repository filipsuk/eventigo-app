/* @flow */

import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import type {
  NavigationScreenOptions
} from 'react-navigation/src/TypeDefinition.js';
import EventList from '../../components/EventList';
import { navigationHeader } from '../../styles';
import { mockedEvents } from '../../mocks/mockedEvents';

import type { Event } from '../../types';

class Homepage extends React.PureComponent {
  static navigationOptions: NavigationScreenOptions = {
    title: 'eventigo.cz',
    header: {
      titleStyle: {
        alignSelf: 'center'
      },
      backTitle: null,
      tintColor: navigationHeader.headerTintColor,
      style: {
        backgroundColor: navigationHeader.headerBackgroundColor
      }
    }
  };

  handleEventPress = (event: Event) => {
    this.props.navigation.navigate('Detail', { event });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <EventList events={mockedEvents} onEventPress={this.handleEventPress} />
      </ScrollView>
    );
  }
}

export default Homepage;
