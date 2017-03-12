import React from 'react';
import {
  Text,
  View,
  StyleSheet
 } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  title: string,
  date: string
}

const EventHeader = ({title, date}: Props) => (
  <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)',]}>
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </LinearGradient>
);

const textShadow = {
  textShadowColor: '#000000',
  textShadowRadius: 4,
  textShadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.3
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
    ...textShadow
  },
  date: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '300',
    ...textShadow
  },
});

export default EventHeader;
