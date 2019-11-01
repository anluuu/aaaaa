import axios from 'axios';
import {apiURL} from './index';


export default async ({cardsArray}) => {

  try {
    const response = await axios.get(`${apiURL}/new/shuffle/?cards=
      ${cardsArray.join(",")}`)
    return response;
  } catch (e) {
    console.log(e)
  }


}
