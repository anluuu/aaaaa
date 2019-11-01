import axios from 'axios';
import { apiURL } from './index';

export default async ({deckID, lines, lineChoosed}) => {
  const response = await axios.get(`${apiURL}/${deckID}/pile/pile
    ${lines.filter(ln => ln !== lineChoosed)[0]}/draw/?count=7`)
}
