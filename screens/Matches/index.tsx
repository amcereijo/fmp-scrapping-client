import React, {useContext, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import Match from './components/Match';
import { getMatches } from '../../api/fmp';
import Loading from '../../common/components/Loading';
import { AppContext } from '../../contexts/AppContext';

const MatchesScreen = () => {
  const {club, setClub} = useContext(AppContext)

  useEffect(() => {
    if (!club) {
      return;
    }

    async function loadMatches () {
      if (!club) {
        return
      }

      try {
        const matches = await getMatches(club?.code);
        setClub({
          ...club,
          matches
        });
      } catch (e) {
        console.error(e)
      }
    }

    if(!club.matches) {
      loadMatches();
    }

  }, [club, setClub]);


  if (!club || !club.matches) {
    return <Loading size={100} color="blue" />
  }

  return (
    <View style={styles.container}>
      {
        club.matches?.length
          ? <Match matches={club.matches}></Match>
          : <></>
      }
    </View>
  );
}

export default MatchesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

