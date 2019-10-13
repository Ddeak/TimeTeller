import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

import { theme } from '../../styles';

interface IPropsType {
  onChange: (newValue: string) => void;
  value: string;
  targetDate: Date | null;
}

export const OperationDisplay = ({
  onChange,
  value,
  targetDate,
}: IPropsType) => {
  const displayDate = targetDate
    ? `${targetDate.getDate()}/${targetDate.getMonth() +
        1}/${targetDate.getFullYear()}`
    : '';
  const minutes = targetDate ? ('0' + targetDate.getMinutes()).slice(-2) : '';
  const displayTime = targetDate ? `${targetDate.getHours()}:${minutes}` : '';

  const onChangeText = (text: string) => {
    if (!text.match(/[0-9]*/gm)) return;
    onChange(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Value"
        style={styles.textInput}
        placeholder="Enter a number..."
        onChangeText={onChangeText}
        keyboardType="numeric"
        value={value}
      />
      <View style={styles.dateHolder}>
        <Text style={styles.text}>{displayDate}</Text>
        <Text style={styles.text}>{displayTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 25,
  },
  textInput: {
    width: '90%',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    opacity: 0.7,
    color: theme.PRIMARY_COLOR,
  },
  dateHolder: {
    width: '60%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.SECONDARY_COLOR,
    marginVertical: 10,
    borderRadius: 5,
  },
});
