import React, { useReducer, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { LargeDate } from '../common';
import { reducer, initialReducerState, Actions } from './reducer';

import { theme } from '../../styles';

export const CountDownScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const onChangeStartDate = (date: Date) => {
    dispatch(Actions.setStartDate(new Date(date)));
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        isVisible={showDatePicker}
        onConfirm={onChangeStartDate}
        onCancel={toggleDatePicker}
        date={state.startDate}
      />
      <Title>Countdown</Title>
      <LargeDate date={state.startDate} />
      <Button mode="contained" onPress={toggleDatePicker}>
        Change
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.SCREEN_BACKGROUND,
  },
  text: {
    color: theme.SECONDARY_COLOR,
  },
});
