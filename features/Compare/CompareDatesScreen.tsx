import React, { useReducer, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

import { LargeDate } from '../common';
import { CompareDisplay } from './CompareDisplay';
import { reducer, initialReducerState, Actions } from './reducer';

import { theme } from '../../styles';

export const CompareDatesScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);
  const { difference, differenceType, startDate, compareDate } = state;

  const onChangeStartDate = (date: Date) => {
    dispatch(Actions.setStartDate(date));
  };

  const onChangeCompareDate = (date: Date) => {
    dispatch(Actions.setCompareDate(date));
  };

  const onDifferenceChange = (difference: string) =>
    dispatch(Actions.setDifference(difference));

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Compare Dates</Title>
      <View>
        <LargeDate date={startDate} onChange={onChangeStartDate} />
        <LargeDate date={compareDate} onChange={onChangeCompareDate} />
      </View>
      <CompareDisplay
        differenceType={differenceType}
        difference={difference}
        onDifferenceChange={onDifferenceChange}
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
