/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Homepage from './components/Homepage';

export default class EventigoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Homepage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
