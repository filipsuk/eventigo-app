/* @flow */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSizes } from '../../styles';
import type { EventTag } from '../../types/model';

type Props = {
  tags?: EventTag[],
  style?: any,
  numberOfLines?: number
};

const EventTags = ({ tags, style, numberOfLines }: Props) => {
  if (!tags) {
    return null;
  }
  return (
    <Text
      style={[styles.tags, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {tags.map(tag => {
        return <Text key={tag.id}>#{tag.code} </Text>;
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  tags: {
    color: '#ACACAC',
    fontSize: fontSizes.smaller
  }
});

export default EventTags;
