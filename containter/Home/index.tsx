import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export type HomeProps = { navigation: any };

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Button
        title="Ir a convocatorias"
        onPress={() => navigation.navigate('Matches')}
      />
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


