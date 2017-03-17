/* @flow */

import { AppRegistry } from 'react-native';
import Homepage from './screens/Homepage';
import EventDetail from './screens/EventDetail';
import { StackNavigator } from 'react-navigation';

const EventigoApp = StackNavigator({
  Home: { screen: Homepage },
  Detail: { screen: EventDetail }
});

export default EventigoApp;

AppRegistry.registerComponent('eventigoApp', () => EventigoApp);
