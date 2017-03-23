/* @flow */

import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EventList from '../../components/EventList';
import { navigationHeader } from '../../styles';

import type { Event } from '../../types/model';
import type {
  NavigationScreenOptions,
  NavigationState,
  NavigationAction,
  NavigationScreenProp
} from 'react-navigation/src/TypeDefinition.js';
import type { BookmarksState } from '../../reducers/bookmarks';
import type { EventsState } from '../../reducers/events';

type Props = {
  events: EventsState,
  bookmarks: BookmarksState,
  onBookmarkPress: (string) => any,
  navigation: NavigationScreenProp<NavigationState, NavigationAction>
};

class Homepage extends React.Component {
  props: Props;

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
    this.props.navigation.navigate(
      'Detail',
      ({
        event
      }: any)
    ); // Typecast needed as params do not accept objects
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <EventList
          events={this.props.events}
          bookmarks={this.props.bookmarks}
          onEventPress={this.handleEventPress}
          onBookmarkPress={this.props.onBookmarkPress}
        />
      </ScrollView>
    );
  }
}

export default Homepage;
