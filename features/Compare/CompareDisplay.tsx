import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { DifferenceTypes } from './reducer';
import { theme } from '../../styles';

interface IPropsType {
  differenceType: string;
  difference: string;
  onDifferenceChange: (difference: string) => void;
}

export const CompareDisplay = ({
  difference,
  differenceType,
  onDifferenceChange,
}: IPropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{difference}</Text>
      </View>
      <View style={styles.row}>
        <Button
          mode={
            differenceType == DifferenceTypes.Days ? 'contained' : 'outlined'
          }
          onPress={() => onDifferenceChange(DifferenceTypes.Days)}>
          {DifferenceTypes.Days}
        </Button>
        <Button
          mode={
            differenceType == DifferenceTypes.Hours ? 'contained' : 'outlined'
          }
          onPress={() => onDifferenceChange(DifferenceTypes.Hours)}>
          {DifferenceTypes.Hours}
        </Button>
        <Button
          mode={
            differenceType == DifferenceTypes.Minutes ? 'contained' : 'outlined'
          }
          onPress={() => onDifferenceChange(DifferenceTypes.Minutes)}>
          {DifferenceTypes.Minutes}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.SECONDARY_COLOR,
    marginVertical: 15,
    borderRadius: 5,
  },
  row: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    opacity: 0.7,
    color: theme.PRIMARY_COLOR,
  },
});
