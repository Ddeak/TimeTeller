import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';

import { Countdown } from './types';
import { theme } from '../../styles';

interface IListView {
  list: Array<Countdown>;
  onItemSelected: (item: Countdown) => void;
  onItemDeleted: (index: number) => void;
}

const EmptyListView = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text>Your countdown list is empty!</Text>
    </View>
  );
};

const renderCountdownItem = (
  item: Countdown,
  onItemSelected: () => void,
  onItemDeleted: () => void,
) => {
  return (
    <View style={styles.itemRow}>
      <TouchableOpacity style={styles.countdown} onPress={onItemSelected}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <IconButton
        icon="delete"
        color={theme.DELETE_COLOR}
        onPress={onItemDeleted}
      />
    </View>
  );
};

export const ListView = ({
  list,
  onItemSelected,
  onItemDeleted,
}: IListView) => {
  if (!list || list.length == 0) {
    return <EmptyListView />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => {
          const temp = () => onItemSelected(item);
          const temp2 = () => onItemDeleted(index);
          return renderCountdownItem(item, temp, temp2);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  emptyContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdown: {
    width: 250,
    height: 30,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  itemRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
