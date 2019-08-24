import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IPropsType {}

export const CountdownScreen = (props: IPropsType) => {
  <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
