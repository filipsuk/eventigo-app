/* @flow */

import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Grid, Col } from 'react-native-elements';
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
          <Grid containerStyle={styles.buttons}>
            <Col>
              <Button
                icon={{ name: 'open-in-new', type: 'material-community' }}
                title="OTEVŘÍT"
                buttonStyle={styles.button}
                backgroundColor={colors.secondary}
              />
            </Col>
            <Col>
              <Button
                icon={{ name: 'calendar-plus', type: 'material-community' }}
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
  }
});

export default EventDetail;
