/* @flow */
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import { trackNavigationStateChange } from '../ga';

describe('GA', () => {
  it('tracks navigation change', () => {
    // mock navigating from Home to Detail
    const prevState = {
      index: 0,
      routes: [
        {
          key: 'Init',
          routeName: 'Home'
        }
      ]
    };
    const currentState = {
      index: 1,
      routes: [
        {
          key: 'Init',
          routeName: 'Home'
        },
        {
          key: 'detail',
          routeName: 'Detail'
        }
      ]
    };

    // mock trackScreenView
    const trackScreenView = jest.fn();
    GoogleAnalyticsTracker.prototype.trackScreenView = trackScreenView;

    trackNavigationStateChange(prevState, currentState);
    expect(trackScreenView).toBeCalledWith('Detail');
  });
});
