import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MatchesScreen from '../../screens/Matches';

export default function Matches() {
  return (
    <View style={styles.container}>
      <MatchesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
