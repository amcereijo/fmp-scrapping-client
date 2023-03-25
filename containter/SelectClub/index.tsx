import React from 'react';
import { StyleSheet } from 'react-native';
import SelectClub from '../../screens/SelectClub';


export type ConfigClubProps = { navigation: any };

export default function ConfigClub({ navigation }: ConfigClubProps) {
  return (
    <SelectClub navigation={navigation}/>
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


