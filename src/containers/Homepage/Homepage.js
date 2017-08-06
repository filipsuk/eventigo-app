/* @flow */

import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EventList from '../../components/EventList';
import { navigationHeader } from '../../styles';
import { tracker } from '../../ga';
import { colors } from '../../styles';

import type { Event } from '../../types/model';
import type {
  NavigationStackScreenOptions,
  NavigationAction,
  NavigationScreenProp,
  NavigationLeafRoute
} from 'react-navigation/src/TypeDefinition.js';
import type { BookmarksState } from '../../reducers/bookmarks';
import type { EventsState } from '../../reducers/events';

type Props = {
  events: EventsState,
  bookmarks: BookmarksState,
  onBookmarkPress: string => any,
  fetchEvents: () => void,
  appLaunch: () => void,
  navigation: NavigationScreenProp<NavigationLeafRoute, NavigationAction>
};

class Homepage extends React.Component {
  props: Props;

  static navigationOptions: NavigationStackScreenOptions = {
    title: 'eventigo.cz',
    titleStyle: {
      alignSelf: 'center'
    },
    headerBackTitle: ' ',
    headerTintColor: navigationHeader.headerTintColor,
    headerStyle: {
      backgroundColor: navigationHeader.headerBackgroundColor
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

  componentDidMount() {
    this.props.fetchEvents();
    this.props.appLaunch();
    tracker.trackScreenView(this.props.navigation.state.routeName);
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.darkBlue }}>
        <StatusBar
          barStyle="light-content"
          networkActivityIndicatorVisible={this.props.events.isFetching}
        />
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
