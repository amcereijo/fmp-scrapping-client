import React from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import moment from 'moment';
import 'moment/locale/es'
import {
  DEFAULT_TEAM_NAME
} from '../../../constants/default-team';
import {DEFAULT_TIME_IN_DAYS } from '../../../constants/match';
import { openWhatsapp } from '../../../api/whatsapp';
import {  Game } from '../../../api/fmp';

moment.locale('es');

function createMatchMessages(matchMoment: moment.Moment, game: Game) {
  const leage = `------ ${game.leage} ----------`;

  let text = '';
  text += `Próximo partido *${matchMoment.format("dddd D MMMM")}* a las *${game.time}* en ${game.location}`;
  text += `\n${game.local} - ${game.visit}`;
  text += '\n1.';
  text += '\n\nPortero:';
  text += '\n\nDelegado:';
  if ((game.local || '').match(DEFAULT_TEAM_NAME)) {
    text += '\nAnotador:';
  }
  text += '\n\n';

  console.log(leage);
  console.log('\n');
  console.log(text);

  return { leage, text };
}


const Match = (props: { matches: Game[]}) => {
  const {
    matches = []
  } = props;

  const texts: JSX.Element[] = [];

  return (
    <View >
      <ScrollView style={styles.container}>
      {
      matches.forEach((match: Game, index: number) => {
        const momentNow = moment();
        const matchMoment = moment(match.date, 'DD/MM/YYYY');

        if(momentNow.add(DEFAULT_TIME_IN_DAYS, 'days').isAfter(matchMoment)) {
          if(match.time) {
            const {leage, text} = createMatchMessages(matchMoment, match);
            texts.push(
              <View key={`match-${index}`} style={index%2===0 ? styles.gameView : styles.gameViewOdd}>
                <Text style={styles.leage} key={`leage-${index}`}>{leage}</Text>
                <Text style={styles.match} key={`game-${index}`}>{text}</Text>
                <Button
                  onPress={async () => {
                    await openWhatsapp(text);
                  }}
                  title="Enviar por Whatsapp"
                />
              </View>
            );
          }
        }
      })
      }
      {texts}
      </ScrollView>
    </View>
  );
}

export default Match;

const styles = StyleSheet.create({
  match: {
    padding: 1,
    paddingTop: 5
  },
  leage: {
    fontWeight: 'bold'
  },
  matchHeader: {
    paddingTop: 20,
    backgroundColor: '#8E806A',
    fontWeight: 'bold',
    fontSize: 22
  },
  container: {
    backgroundColor: '#fff',
  },
  gameView: {
    padding: 10,
    borderRadius: 5,
  },
  gameViewOdd: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FDEFEF'
  }
});
