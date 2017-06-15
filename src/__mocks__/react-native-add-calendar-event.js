const cal = jest.genMockFromModule('react-native-add-calendar-event');

cal.presentNewCalendarEventDialog = jest
  .fn()
  .mockReturnValue(Promise.resolve('mockEventId'));

module.exports = cal;
