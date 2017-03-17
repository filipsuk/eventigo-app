/* @flow */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSizes } from '../../styles';
import type { EventTag } from '../../types';

type Props = {
  tags?: EventTag[]
};

const EventTags = ({ tags }: Props) => {
  if (!tags) {
    return null;
  }
  return (
    <Text style={styles.tags} numberOfLines={1} ellipsizeMode="tail">
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
