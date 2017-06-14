/* @flow */

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';
import { Button, Grid, Col } from 'react-native-elements';
import EventTags from '../../components/EventTags';
import EventDate from '../../components/EventDate';
import Bookmark from '../../components/Bookmark';
import { navigationHeader, fontSizes, colors } from '../../styles';
import { tracker } from '../../ga';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';

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
  onBookmarkPress: string => any
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

  /**
  * Open URL in browser
  */
  static openUrl(url: string): void {
    // TODO: if facebook, open in app with uri like fb://event?id=258779314553712
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url).catch(err => {
          console.error('Error opening link:', err);
          Alert.alert('Chyba', `Nepodařilo se otevřít url ${url}`);
        });
      } else {
        console.error("Don't know how to open URI: " + url);
        Alert.alert('Chyba', `Nepodařilo se otevřít url ${url}`);
      }
    });
  }

  handleOpen = () => {
    const { url } = this.props.navigation.state.params.event;
    EventDetail.openUrl(url);
    tracker.trackEvent('Detail', 'Open event source');
  };

  handleAddToCalendar = () => {
    const { event } = this.props.navigation.state.params;
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ';
    const start = moment(event.start).format(format);
    const end = moment(event.end || null).format(format);
    const eventConfig = {
      title: event.name,
      startDate: start,
      endDate: end,
      url: event.url,
      notes: event.description
    };

    AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
      .then(eventId => {
        //handle success (receives event id) or dismissing the modal (receives false)
        if (eventId) {
          Alert.alert('Úspěšně uloženo');
        } else {
          console.warn('dismissed');
        }
      })
      .catch((error: string) => {
        // handle error such as when user rejected permissions
        Alert.alert(
          'Uložení do kalendáře se nezdařilo',
          'Zkontrolujte oprávnění ke kalendáři.'
        );
        console.warn(error);
      });

    tracker.trackEvent('Detail', 'Add to calendar');
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

export default EventDetail;
