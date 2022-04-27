import axios from 'axios';
import { User } from './types';

const exampleBaseUrl = 'https://api.agify.io';

export class AxiosClient {
  static getUserByName(name: string) {
    axios
      .get<User>(`${exampleBaseUrl}?name=${name}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('display error: error');
        return Promise.reject(error);
      });
  }
}
