import axios from 'axios';
// eslint-disable-next-line
import { apiURL } from './index'

export default async ({value, deckID}) => {
  try {
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${value}`);
    const { data } = response;
    return data;

  } catch (e) {
    console.log(e)
  }
}
