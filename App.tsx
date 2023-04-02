/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import { AppRoutes } from './src/Routes';

function App(): JSX.Element {
   return (
      <>
         <AppRoutes />
         <Toast />
      </>
   )
}

export default App;
