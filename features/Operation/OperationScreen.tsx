import React, { useReducer, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

import { LargeDate } from '../common';
import { reducer, initialReducerState, Actions } from './reducer';

import { theme } from '../../styles';

export const OperationScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);
  const { startDate } = state;

  const onChangeStartDate = (date: Date) => {
    dispatch(Actions.setStartDate(date));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Operation</Title>
      <View>
        <LargeDate date={startDate} onChange={onChangeStartDate} />
      </View>
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
