/* @flow */

import { AppRegistry } from 'react-native';
import Homepage from './components/Homepage';
import { StackNavigator } from 'react-navigation';

const EventigoApp = StackNavigator({
  Home: { screen: Homepage },
});

export default EventigoApp;

AppRegistry.registerComponent('eventigoApp', () => EventigoApp);
