
import React, { useContext, useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import { SignInAppleComponent } from './SignInApple';
import { SignInGoogleComponent } from './SignInGoogle';
import styles from './style';
// @ts-ignore 
import LoginBanner from "../../../assets/svg/LoginBanner.svg";
import { validateToken } from '../../Services/auth.service';
import { AuthContext } from '../../Contexts/AuthContext';


export function AuthScreen({ navigation }: any) {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.setGenericPasswordSignIn('mohtashami911@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaHRhc2hhbWk5MTFAZ21haWwuY29tIiwidXNlcl9pZCI6MiwiZXhwIjoxNzExODc5ODIwfQ.09tvQsbZf2o8ZCyWsAYBbYnctiPSanJ9xlU9ezk4o_k')
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#FF597B',
      },
      headerShadowVisible: false,
    })

  }, [navigation])



  const onValidateToken = (token, email, token_type) => {
    console.log(token, email, token_type);

    validateToken({ token, token_type }).then(
      (jwtToken) => {
        authContext.setAuthState({
          accessToken: token,
          authenticated: true,
        })
        authContext.setGenericPasswordSignIn(email, jwtToken.data)
        navigation.navigate('Home')
      }
    )
  }

  return (

    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <LoginBanner width={200} height={300} />
        <Text style={styles.titleText}>Lovers</Text>
      </View>

      <View style={styles.SignInOptionContainer}>

        {Platform.OS === 'ios' &&
          <SignInAppleComponent />
        }
        {Platform.OS === 'android' &&
          <SignInGoogleComponent onSubmit={onValidateToken} />
        }
      </View>
    </View>

  );
}