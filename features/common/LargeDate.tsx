import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../styles';

interface PropsType {
  date: Date;
}

export const LargeDate = ({ date }: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textFragment}>
          <Text style={styles.text}>{date.getDate()}</Text>
        </View>
        <View style={styles.textFragment}>
          <Text style={styles.text}>{date.getMonth()}</Text>
        </View>
        <View style={styles.textFragment}>
          <Text style={styles.text}>{date.getFullYear()}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.textFragment}>
          <Text style={styles.text}>
            {`${date.getHours()}:${date.getUTCMinutes()}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  textFragment: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
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
});
