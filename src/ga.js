/* @flow */
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import Config from 'react-native-config';

import type {
  NavigationState,
  NavigationLeafRoute
} from 'react-navigation/src/TypeDefinition.js';

const tracker = initTracker();

function initTracker() {
  const ga = new GoogleAnalyticsTracker(Config.GA_TRACKING_ID);
  // TODO ga.setAppVersion()
  return ga;
}

function trackNavigationStateChange(
  prevState: NavigationState,
  currentState: NavigationState
) {
  const currentScreen = getCurrentRouteName(currentState);
  const prevScreen = getCurrentRouteName(prevState);

  if (prevScreen !== currentScreen) {
    tracker.trackScreenView(currentScreen);
  }
}

// gets the current screen from navigation state
function getCurrentRouteName(navigationState: any) {
  if (!navigationState) {
    return null;
  }
  const route: NavigationLeafRoute =
    navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export { trackNavigationStateChange, tracker };
