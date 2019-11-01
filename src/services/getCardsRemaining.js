import axios from 'axios';
import {apiURL} from './index';


export default async ({deckID, name}) => {
  try {
    const response = await axios.get(`${apiURL}/${deckID}/pile/${name}/draw/?count=21`)
    return response;

  } catch (e) {

  }
}
