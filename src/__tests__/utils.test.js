import { addEventToCalendar, openUrl } from '../utils';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import { Linking } from 'react-native';

describe('Utils', () => {
  it('adds event to calendar', () => {
    const eventConfig = {
      title: 'Test event'
    };
    const presentNewCalendarEventDialog = jest
      .fn()
      .mockReturnValue(Promise.resolve('123'));
    AddCalendarEvent.presentNewCalendarEventDialog = presentNewCalendarEventDialog;

    addEventToCalendar(eventConfig);
    expect(presentNewCalendarEventDialog).toBeCalled();
  });

  it('opens url', async () => {
    const canOpenURL = jest.fn().mockReturnValue(Promise.resolve(true));
    Linking.canOpenURL = canOpenURL;
    const openURL = jest.fn().mockReturnValue(Promise.resolve(true));
    Linking.openURL = openURL;
    const url = 'https://eventigo.cz';
    await openUrl(url);
    expect(openURL).toBeCalledWith(url);
  });
});
