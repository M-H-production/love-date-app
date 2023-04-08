import { AxiosResponse } from "axios";
import * as Keychain from 'react-native-keychain';
import Toast from "react-native-toast-message";

export function ErrorHandeling(error: AxiosResponse) {

  Toast.show({
    type: 'error',
    text1: error.data?.message,
  })

  switch (error.status) {
    case 400:
      console.error(error.data);
      break;

    case 401:
      console.error('unauthorised');
      Keychain.resetGenericPassword().then()
      break;

    case 404:
      console.error('not-found');
      break;

    case 500:
      console.error('server-error');
      break;
  }
}