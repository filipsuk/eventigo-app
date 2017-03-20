/* @flow */

// 1.125 Major Second Type Scale @see http://type-scale.com/
const fontSizeBase = 16;
const fontSizes: { [sizeName: string]: number } = {
  base: fontSizeBase,
  h1: fontSizeBase * 1.602,
  h2: fontSizeBase * 1.424,
  h3: fontSizeBase * 1.266,
  h4: fontSizeBase * 1.125,
  small: fontSizeBase * 0.889,
  smaller: fontSizeBase * 0.79
};

const colors = {
  white: '#FFF',
  dark: '#2E4147',
  darkBlue: '#162B33',
  primary: '#5BADF2',
  secondary: '#319F97',
  highlight: '#FED02F',
  danger: '#DB4141'
};

const navigationHeader = {
  headerTintColor: colors.white,
  headerBackgroundColor: colors.darkBlue
};

export { fontSizes, colors, navigationHeader };
