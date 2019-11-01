import axios from 'axios';
import { apiURL } from './index';


export default async ({deckID, addCards, i}) => {
  const response = await axios.get(`${apiURL}/${deckID}/pile/${i}/add/?cards=
    ${addCards}`)
  return response;
}
