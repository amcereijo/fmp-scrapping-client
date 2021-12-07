import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Match from './components/Match';
import { getMatches, Game } from '../../api/fmp';

const Matches = () => {
  const [matchesData, setMatchesData] = useState<{matches: Game[]}>({matches: []});

  return (
    <View style={styles.container}>
      <View>
      {
      !matchesData.matches.length &&  <Button
        onPress={async () => {
          const matches = await getMatches();
          console.log('Matches', matches)
          setMatchesData({
            matches: matches,
          })
        }}
        title="Obtener convocatorias"
      />
      }
      </View>
      {
        matchesData.matches.length
          ? <Match matches={matchesData.matches}></Match>
          : <></>
      }
    </View>
  );
}

export default Matches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

