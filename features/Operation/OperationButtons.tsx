import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { OperationTypes } from './reducer';

interface IButtonsProps {
  activeOperation: OperationTypes;
  onChange: (operation: OperationTypes) => void;
}

export const OperationButtons = ({
  onChange,
  activeOperation,
}: IButtonsProps) => {
  return (
    <View style={styles.container}>
      <Button
        mode={activeOperation == OperationTypes.Add ? 'contained' : 'outlined'}
        onPress={() => onChange(OperationTypes.Add)}>
        Add
      </Button>
      <Button
        mode={
          activeOperation == OperationTypes.Subtract ? 'contained' : 'outlined'
        }
        onPress={() => onChange(OperationTypes.Subtract)}>
        Subtract
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
