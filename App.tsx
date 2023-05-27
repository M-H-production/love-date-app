/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {AppRoutes} from './src/Routes';
import {Notifications, Registered} from 'react-native-notifications';

function App(): JSX.Element {
  useEffect(() => {
    Notifications.events().registerRemoteNotificationsRegistered(
      (event: Registered) => {
        console.log('Device Token Received', event.deviceToken);
      },
    );
  }, []);

  return (
    <>
      <AppRoutes />
      <Toast />
    </>
  );
}

export default App;
