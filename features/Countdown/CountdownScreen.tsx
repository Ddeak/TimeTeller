import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FAB } from 'react-native-paper';

import { theme } from '../../styles';
import { useAsyncStorage } from './customHooks';
import { AddCountdownDialog } from './AddCountdownDialog';
import { ListView } from './ListView';

import { Countdown } from './types';

export const CountdownScreen = () => {
  const [countdownList, setCountdownList] = useAsyncStorage(
    '@@TimeTeller/CountdownList',
    [],
  );
  const [showDialog, setShowDialog] = useState(false);

  const onAddCountdown = (item: Countdown) => {
    setCountdownList([...countdownList, item]);
    setShowDialog(false);
  };

  const onDeleteCountdown = (index: number) => {
    countdownList.splice(index, 1);
    setCountdownList(countdownList);
  };

  const onCountdownSelected = (item: Countdown) => {
    // Update UI to show time to Countdown
  };

  return (
    <View style={styles.container}>
      <ListView
        list={countdownList}
        onItemSelected={onCountdownSelected}
        onItemDeleted={onDeleteCountdown}
      />
      <AddCountdownDialog
        onAdd={onAddCountdown}
        showDialog={showDialog}
        onCancel={() => setShowDialog(false)}
      />
      <FAB
        style={styles.fab}
        small
        icon="add"
        onPress={() => setShowDialog(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.SCREEN_BACKGROUND,
    paddingTop: 40,
  },
  fab: {
    backgroundColor: theme.PRIMARY_COLOR,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
