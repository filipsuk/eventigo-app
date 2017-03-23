/* @flow */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../styles';

type Props = {
  active: boolean,
  onPress?: Function,
  size?: number,
  containerStyle?: any
};

const Bookmark = ({ active, onPress, containerStyle, size }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Icon
        name={active ? 'ios-bookmark' : 'ios-bookmark-outline'}
        type="ionicon"
        color={active ? colors.highlight : colors.dark}
        size={size}
        underlayColor="transparent"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 99
  }
});

export default Bookmark;
