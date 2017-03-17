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

export { fontSizes };
