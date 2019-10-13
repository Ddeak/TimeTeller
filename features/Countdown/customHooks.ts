import AsyncStorage from '@react-native-community/async-storage';
import { useState, useEffect } from 'react';

export const useAsyncStorage = (key: string, defaultValue: any) => {
  const [storageValue, setStorageValue] = useState(defaultValue);
  const [updated, setUpdated] = useState(false);

  async function getStorageValue() {
    let value = defaultValue;
    try {
      const v = await AsyncStorage.getItem(key);
      if (v) value = JSON.parse(v);
    } catch (err) {
      console.log('Error storing local storage value:', err);
    } finally {
      setStorageValue(value);
      setUpdated(true);
    }
  }

  async function updateStorage(newValue: any) {
    try {
      if (newValue === null) {
        await AsyncStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
    } finally {
      setUpdated(false);
      getStorageValue();
    }
  }

  useEffect(() => {
    getStorageValue();
  }, [updated]);

  return [storageValue, updateStorage];
};
