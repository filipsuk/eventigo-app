/* @flow */

import { AppRegistry } from 'react-native';
import Homepage from './screens/Homepage';
import EventDetail from './screens/EventDetail';
import { StackNavigator } from 'react-navigation';
import moment from 'moment';
import csLocale from 'moment/locale/cs';

function setup() {
  moment.locale('cs', csLocale);

  const Root = StackNavigator({
    Home: { screen: Homepage },
    Detail: { screen: EventDetail }
  });
  return Root;
}

export default setup;

AppRegistry.registerComponent('eventigoApp', setup);
