/* @flow */

import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import EventList from '../../components/EventList';
import { navigationHeader } from '../../styles';
import { mockedEvents } from '../../mocks/mockedEvents';
import { toggleBookmark } from '../../actions/bookmark';

import type { Event } from '../../types';
import type {
  NavigationScreenOptions,
  NavigationState,
  NavigationAction,
  NavigationScreenProp
} from 'react-navigation/src/TypeDefinition.js';
import type { BookmarksState } from '../../reducers/bookmarks';

type Props = {
  bookmarks: BookmarksState,
  onBookmarkPress: Function,
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
    this.props.navigation.navigate('Detail', { event: (event: any) }); // Typecast needed as params do not accept objects
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <EventList
          events={mockedEvents}
          bookmarks={this.props.bookmarks}
          onEventPress={this.handleEventPress}
          onBookmarkPress={this.props.onBookmarkPress}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps: mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps: mapDispatchToProps = dispatch => {
  return {
    onBookmarkPress: id => {
      dispatch(toggleBookmark(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
