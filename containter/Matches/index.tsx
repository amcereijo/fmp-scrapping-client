import React from 'react';
import { StyleSheet, View } from 'react-native';
import Matches from '../../screens/Matches';

export default function App() {
  return (
    <View style={styles.container}>
      <Matches/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
