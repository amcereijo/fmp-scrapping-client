import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UseAsyncStorageReturnType<T> = [T | undefined, boolean, (value: T) => Promise<void>, () => Promise<void>];


export const STORAGE_KEYS = {
  CLUB: 'club',
  MATCHES: 'matches'
} as const;

function useAsyncStorage<T = unknown>(key: string, initialValue?: T): UseAsyncStorageReturnType<T> {
  const [state, setState] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadInitialState() {
      try {
        const value = await AsyncStorage.getItem(key);

        if (value !== null) {
          setState(JSON.parse(value));
        } else if (initialValue) {
          setValue(initialValue)
        }

        setIsLoading(false);
      } catch (error) {
        console.log('Error loading async storage:', error);
      }
    }

    loadInitialState();
  }, [key]);

  async function setValue(value: T): Promise<void> {
    try {
      setState(value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log('Error saving to async storage:', error);
    }
  }

  async function clearValue(): Promise<void> {
    try {
      setState(undefined);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error clearing async storage:', error);
    }
  }

  return [state, isLoading, setValue, clearValue];
}

export default useAsyncStorage;

