import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export type PreferencesProps = { navigation: any };

export default function Preferences({ navigation }: PreferencesProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configuración...!</Text>
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


