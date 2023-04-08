import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from '../Screens/Home';
import { AuthScreen } from '../Screens/Auth';
import { AuthContext } from '../Contexts/AuthContext';
import { SettingScreen } from '../Screens/Setting';
import { PersonalScreen } from '../Screens/Personal';
import { OnboardingScreen } from '../Screens/Onboarding';
import { PartnerScreen } from '../Screens/Partner';
import { AboutUs } from '../Screens/AboutUs';

export function AppRoutes() {
  const Stack = createNativeStackNavigator();
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authContext.getAccessToken() ? (
          <>
            {authContext.profile !== null &&
              <Stack.Screen name="Home" component={HomeScreen} />
            }
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Personal" component={PersonalScreen} />
            <Stack.Screen name="Partner" component={PartnerScreen} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
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