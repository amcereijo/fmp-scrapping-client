import axios from 'axios';
import FormData from 'form-data';
import cheerio from 'cheerio';
import {LOCATION_MAP} from '../constants/locations';
const {
  DEFAULT_TEAM_CODE,
} = require('../constants/default-team');

export type Game = {
  leage: string | null,
  date: string | null,
  time: string | null,
  local: string | null,
  visit: string | null,
  location: string | null,
}

export async function getMatches(team = DEFAULT_TEAM_CODE): Promise<Game[]> {
  const url = 'https://ns3104249.ip-54-37-85.eu/shared/portales_files/agenda_portales.php';

  const form = new FormData();
  form.append('cliente', 'fmp');
  form.append('idm', 1);
  form.append('id_temp', 21);

  console.log('form', form)

  const response = await axios.post(url, form);

  const $ = cheerio.load(response.data);
  const games: Game[] = [];
  $('.fila_agenda').each((i, el: any) => {
    const paramGame = el.attribs['param_game'];

    if(String(paramGame).match(team)) {
      const location = <string> $(el.childNodes[19]).html();
      const map = LOCATION_MAP[location];

      games.push({
        leage: $((el.childNodes[3]).childNodes[0]).html(),
        date: $(el.childNodes[5]).html(),
        time: $(el.childNodes[7]).html(),
        local: $(el.childNodes[11]).html(),
        visit: $(el.childNodes[15]).html(),
        location: map ? `${location} - ${map}` : location,
      });
    }
  });
  return games;
}

