import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const BlankPage = () => {
  return (
    <View style={styles.container}>
      <Text>FMP client</Text>
    </View>
  );
}

export default BlankPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

