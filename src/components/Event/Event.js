/* @flow */

import React from 'react';
import {
  Image,
  StyleSheet
 } from 'react-native';
import EventHeader from '../EventHeader';

type Props = {
  title: string,
  date: string,
  imageUri: string
}

const Event = ({title, date, imageUri}: Props) => (
    <Image source={{uri: imageUri}} style={styles.image}>
      <EventHeader title={title} date={date} />
    </Image>
);

const styles = StyleSheet.create({
  image: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
});

export default Event;
