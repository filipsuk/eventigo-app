/* @flow */

import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Grid, Col } from 'react-native-elements';
import EventTags from '../../components/EventTags';
import EventDate from '../../components/EventDate';
import Bookmark from '../../components/Bookmark';
import { navigationHeader, fontSizes, colors } from '../../styles';
import { tracker } from '../../ga';
import { addEventToCalendar, openUrl } from '../../utils';
import HTMLView from 'react-native-htmlview';

import type { Event } from '../../types/model';
import type { BookmarksState } from '../../reducers/bookmarks';
import type { NavigationStackScreenOptions } from 'react-navigation/src/TypeDefinition.js';

type Props = {
  navigation: {
    state: {
      params: {
        event: Event
      }
    }
  },
  bookmarks: BookmarksState,
  onBookmarkPress: string => any,
  onOpenSource: void => void,
  onAddToCalendar: void => void
};

class EventDetail extends React.Component {
  props: Props;

  static navigationOptions = ({ navigation }) =>
    ({
      title: navigation.state.params.event.name,
      headerTintColor: navigationHeader.headerTintColor,
      headerStyle: {
        backgroundColor: navigationHeader.headerBackgroundColor
      }
    }: NavigationStackScreenOptions);

  handleOpen = () => {
    const { url } = this.props.navigation.state.params.event;
    openUrl(url);
    tracker.trackEvent('Detail', 'Open event source');
    this.props.onOpenSource();
  };

  handleAddToCalendar = () => {
    addEventToCalendar(this.props.navigation.state.params.event);
    tracker.trackEvent('Detail', 'Add to calendar');
    this.props.onAddToCalendar();
  };

  handleBookmarkPress = (id: string) => {
    this.props.onBookmarkPress(id);
  };

  render() {
    const { event } = this.props.navigation.state.params;
    const { bookmarks } = this.props;

    return (
      <ScrollView>
        <Image source={{ uri: event.image }} style={styles.image}>
          <Bookmark
            active={bookmarks[event.id]}
            containerStyle={styles.bookmark}
            size={30}
            onPress={() => this.handleBookmarkPress(event.id)}
          />
        </Image>
        <View style={styles.body}>
          <Text style={styles.title}>
            {event.name}
          </Text>
          <EventDate event={event} style={styles.date} />
          <EventTags tags={event.tags} style={styles.tags} />
          <Grid containerStyle={styles.buttons}>
            <Col>
              <Button
                onPress={this.handleOpen}
                icon={{ name: 'external-link', type: 'font-awesome' }}
                title="OTEVŘÍT"
                buttonStyle={styles.button}
                backgroundColor={colors.secondary}
              />
            </Col>
            <Col>
              <Button
                onPress={this.handleAddToCalendar}
                icon={{ name: 'calendar-plus-o', type: 'font-awesome' }}
                title="ULOŽIT"
                buttonStyle={styles.button}
                backgroundColor={colors.secondary}
              />
            </Col>
          </Grid>

          <HTMLView
            value={event.description}
            style={styles.description}
            stylesheet={htmlStyles}
            paragraphBreak=""
            textComponentProps={{
              style: {
                color: colors.dark
              }
            }}
          />

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
    marginVertical: 5
  },
  buttons: {
    marginHorizontal: -5,
    marginVertical: 5
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 3
  },
  bookmark: {
    position: 'absolute',
    right: 0,
    top: -4
  }
});

const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: colors.primary
  }
});

export default EventDetail;
