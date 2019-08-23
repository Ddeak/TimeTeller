import React, { Fragment, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button } from 'react-native-paper';

import { theme } from '../../styles';

interface PropsType {
  date: Date;
  onChange: (date: Date) => void;
}

export const LargeDate = ({ date, onChange }: PropsType) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const displayDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const displayTime = `${date.getHours()}:${date.getUTCMinutes()}`;

  const onDateChange = (date: Date) => {
    onChange(date);
    toggleDatePicker();
  };

  const onReset = () => {
    onChange(new Date());
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        isVisible={showDatePicker}
        onConfirm={onDateChange}
        onCancel={toggleDatePicker}
        date={date}
        mode="datetime"
      />

      <View style={styles.dateHolder}>
        <Text style={styles.text}>{displayDate}</Text>
        <Text style={styles.text}>{displayTime}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={toggleDatePicker}>
          Change
        </Button>
        <Button icon="history" mode="contained" onPress={onReset}>
          Set Now
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    opacity: 0.7,
    color: theme.PRIMARY_COLOR,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '35%',
    height: 100,
    justifyContent: 'space-evenly',
  },
});
