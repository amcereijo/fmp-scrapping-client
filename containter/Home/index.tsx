import React from 'react';
import { StyleSheet } from 'react-native';
import BlankPage from '../../screens/BlankPage';


export type HomeProps = { navigation: any };

export default function Home({ navigation }: HomeProps) {
  return (
    <BlankPage/>
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


