/* @flow */

import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import type {NavigationScreenOptions} from 'react-navigation/src/TypeDefinition.js';

class Homepage extends React.PureComponent {
  static navigationOptions: NavigationScreenOptions = {
    title: 'eventigo',
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
        <Text>
          Welcome to eventigo!
        </Text>
      </View>
    );
  }

}

export default Homepage;
