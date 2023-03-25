import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import clubs, {ClubType}  from '../../constants/clubs'
import styles from './styles'
import useAsyncStorage, { STORAGE_KEYS } from '../../hooks/useAsyncStorage';
import Loading from '../../common/components/Loading';
import { AppContext } from '../../contexts/AppContext';

export type HomeProps = { navigation: any };

export default function SelectClub({ navigation }: HomeProps) {
  const [selectedValue, setSelectedValue] = useState<null | number>(null);
  const {club, setClub} = useContext(AppContext)

  const handlePress = () => {
    const selectedClub = clubs.find((club) => club.code === Number(selectedValue))
    if (selectedClub) {
      setClub(selectedClub)
      navigation.navigate('Inicio')
    }
  };

  if (!club) {
    return <Loading size={100} color="blue" />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un Club</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue || club.code}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {clubs.map((club: ClubType) => (
          <Picker.Item label={club.name} value={club.code} key={club.code} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );
}
