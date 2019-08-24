import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { TimeTypes } from './reducer';

interface ButtonsProps {
  selectedType: TimeTypes;
  onChange: (type: TimeTypes) => void;
}

export const TimeButtons = ({ onChange, selectedType }: ButtonsProps) => {
  return (
    <View style={styles.container}>
      <Button
        mode={selectedType == TimeTypes.Months ? 'contained' : 'outlined'}
        onPress={() => onChange(TimeTypes.Months)}>
        Months
      </Button>
      <Button
        mode={selectedType == TimeTypes.Days ? 'contained' : 'outlined'}
        onPress={() => onChange(TimeTypes.Days)}>
        Days
      </Button>
      <Button
        mode={selectedType == TimeTypes.Hours ? 'contained' : 'outlined'}
        onPress={() => onChange(TimeTypes.Hours)}>
        Hours
      </Button>
      <Button
        mode={selectedType == TimeTypes.Minutes ? 'contained' : 'outlined'}
        onPress={() => onChange(TimeTypes.Minutes)}>
        Minutes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },
});
