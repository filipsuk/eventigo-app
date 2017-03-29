const rn = require('react-native');
jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(() => Promise.resolve())
  };
});

jest.mock('TouchableHighlight', () => 'TouchableHighlight');
jest.mock('TouchableOpacity', () => 'TouchableOpacity');

module.exports = rn;
