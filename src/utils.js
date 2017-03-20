/* @flow */

const capitalize = (string: ?string): string => {
  if (string && string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return '';
  }
};

export { capitalize };
