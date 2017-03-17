/* @flow */

import React from 'react';
import { View, StatusBar } from 'react-native';
import type {
  NavigationScreenOptions
} from 'react-navigation/src/TypeDefinition.js';
import EventCard from '../EventCard';

import type { Event } from '../../types';

class Homepage extends React.PureComponent {
  static navigationOptions: NavigationScreenOptions = {
    title: 'eventigo.cz',
    header: {
      tintColor: '#EFEFF4',
      style: {
        backgroundColor: '#162B33'
      }
    }
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <EventCard event={mockedEvents[0]} />
        <EventCard event={mockedEvents[1]} />
        <EventCard event={mockedEvents[2]} />
      </View>
    );
  }
}

const mockedEvents: Event[] = [
  {
    id: 1,
    name: 'Devel 2017',
    description: 'Lorem ipsum',
    url: 'https://example.org',
    start: 'Sobota 1. 4.',
    end: '2. 4.',
    image: 'https://i.imgsafe.org/a5b1b555fc.png',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  },
  {
    id: 1,
    name: 'Machine Learning Prague 2017',
    description: 'Lorem ipsum',
    url: 'https://example.org',
    start: 'Pátek 21. 4.',
    end: '23. 4.',
    image: 'https://i.imgsafe.org/5c2b9b62ae.png',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  },
  {
    id: 1,
    name: 'Wisephora',
    description: 'Lorem ipsum',
    url: 'https://example.org',
    start: 'Pátek 21. 4.',
    image: 'https://i.imgsafe.org/e89935b30c.png',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  }
];

export default Homepage;
