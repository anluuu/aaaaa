import axios from 'axios'
import {apiURL} from './index'

export default async () => {
  try {
    const response = await axios.get(`${apiURL}/new/shuffle/`)
    const { data } = response;
    return data;

  } catch (e) {
    console.log(e)
  }

}
