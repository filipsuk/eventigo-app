/* @flow */

import { AppRegistry } from 'react-native';
import Homepage from './components/Homepage';
import EventDetail from './components/EventDetail';
import { StackNavigator } from 'react-navigation';

const EventigoApp = StackNavigator({
  Home: { screen: Homepage },
  Detail: { screen: EventDetail }
});

export default EventigoApp;

AppRegistry.registerComponent('eventigoApp', () => EventigoApp);
