/* @flow */

import React from 'react';
import { View, StatusBar } from 'react-native';
import type {NavigationScreenOptions} from 'react-navigation/src/TypeDefinition.js';
import Event from '../Event';

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
        <Event title="Devel 2017" date="Sobota 1. 4. 2017" imageUri="https://i.imgsafe.org/a5b1b555fc.png" />
        <Event title="Machine Learning Prague 2017" date="Pátek 21.4. – 23. 4. 2017" imageUri="https://i.imgsafe.org/5c2b9b62ae.png" />
        <Event title="Wisephora" date="Středa 31. 5. 2017" imageUri="https://i.imgsafe.org/e89935b30c.png" />
      </View>
    );
  }

}

export default Homepage;
