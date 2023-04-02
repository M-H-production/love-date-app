import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from '../Screens/Home';
import { AuthScreen } from '../Screens/Auth';
import { AuthContext } from '../Contexts/AuthContext';
import { SettingScreen } from '../Screens/Setting';
import SplashScreen from 'react-native-splash-screen';
import { IntoScreen } from '../Screens/Intro';

export function AppRoutes() {
  const Stack = createNativeStackNavigator();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.getAccessToken() !== null) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    }

  }, [authContext.getAccessToken()])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authContext.getAccessToken() ? (
          <>
            <Stack.Screen name="Intro" component={IntoScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
          </>

        ) :
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}