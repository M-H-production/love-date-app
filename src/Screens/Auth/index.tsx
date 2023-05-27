import React, {useContext, useEffect} from 'react';
import {Platform, Text, View} from 'react-native';
import {SignInAppleComponent} from './SignInApple';
import {SignInGoogleComponent} from './SignInGoogle';
import styles from './style';
// @ts-ignore
import LoginBanner from '../../../assets/svg/LoginBanner.svg';
import {validateToken} from '../../Services/auth.service';
import {AuthContext} from '../../Contexts/AuthContext';
import {setAuthorizationToken} from '../../Services/Api/instance';
import {Notifications, Registered} from 'react-native-notifications';

export function AuthScreen({navigation}: any) {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    Notifications.events().registerRemoteNotificationsRegistered(
      (event: Registered) => {
        console.log('Device Token Received', event.deviceToken);
      },
    );
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#FF597B',
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const onValidateToken = (token, email, token_type) => {
    validateToken({token, token_type}).then(jwtToken => {
      authContext.setAuthState({
        accessToken: token,
        authenticated: true,
      });
      setAuthorizationToken(jwtToken.data);
      authContext.setGenericPasswordSignIn(email, jwtToken.data);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <LoginBanner width={200} height={300} />
        <Text style={styles.titleText}>Lovers</Text>
      </View>

      <View style={styles.SignInOptionContainer}>
        {Platform.OS === 'ios' && <SignInAppleComponent />}
        {Platform.OS === 'android' && (
          <SignInGoogleComponent onSubmit={onValidateToken} />
        )}
      </View>
    </View>
  );
}
