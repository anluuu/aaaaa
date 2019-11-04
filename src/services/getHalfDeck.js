import axios from 'axios';
import {apiURL} from './index';


export default async () => {

  try {
    const response = await axios.get(`${apiURL}/new/draw/?count=21`)    
    return response;
  } catch (e) {
    console.log(e)
  }


}
