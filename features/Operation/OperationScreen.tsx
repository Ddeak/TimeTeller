import React, { useReducer, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

import { LargeDate } from '../common';
import {
  reducer,
  initialReducerState,
  Actions,
  OperationTypes,
  TimeTypes,
} from './reducer';
import { OperationButtons } from './OperationButtons';
import { OperationDisplay } from './OperationDisplay';
import { TimeButtons } from './TimeButtons';

import { theme } from '../../styles';

export const OperationScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);
  const { startDate, operation, value, targetDate, timeType } = state;

  const onChangeStartDate = (date: Date) => {
    dispatch(Actions.setStartDate(date));
  };

  const onOperationChange = (operation: OperationTypes) => {
    dispatch(Actions.setOperation(operation));
  };

  const onValueChange = (value: string) => {
    dispatch(Actions.setValue(value));
  };

  const onTimeTypeChange = (type: TimeTypes) => {
    dispatch(Actions.setTimeType(type));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Operation</Title>
      <LargeDate date={startDate} onChange={onChangeStartDate} />
      <OperationButtons
        onChange={onOperationChange}
        activeOperation={operation}
      />
      <TimeButtons selectedType={timeType} onChange={onTimeTypeChange} />
      <OperationDisplay
        onChange={onValueChange}
        value={value}
        targetDate={targetDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.SCREEN_BACKGROUND,
    paddingTop: 40,
  },
  title: {
    color: theme.PRIMARY_COLOR,
  },
});
