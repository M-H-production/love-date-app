import React, { createContext, useCallback, useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { setAuthorizationToken } from '../Services/Api/instance';
import { Profile } from '../Models/profile.model';
import { getActivePartner, getProfile, getspecialDay } from '../Services/home.service';
import SplashScreen from 'react-native-splash-screen';
import { getData, storeData } from '../Utils/Storage';
import NetInfo from "@react-native-community/netinfo";

const AuthContext = createContext<any>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState<{ accessToken: string | null, authenticated: boolean | null }>({
        accessToken: null,
        authenticated: null,
    });
    const [profile, setProfile] = useState<Profile | null>(null);
    const onInitApp = useCallback(async () => {
        const data = await Keychain.getGenericPassword();
        if (data && data.password) {
            setAuthState({
                accessToken: data.password,
                authenticated: true,
            })
            try {
                console.log((await NetInfo.fetch()).isConnected)
                if ((await NetInfo.fetch()).isConnected) {
                    const profile = await getProfile();
                    console.log(profile);
                    setProfile(profile.data);
                    const specialDay = await getspecialDay()
                    console.log(specialDay);
                    const activePartner = await getActivePartner()
                    await storeData('userData', { profile: profile.data || null, activePartner: activePartner.data || null, specialDay: specialDay.data })
                } else {

                }
            } catch (error) {
                console.log(error);


            } finally {
                console.log('splash screen closed');
                SplashScreen.hide()
            }

        } else {
            setAuthState({
                accessToken: null,
                authenticated: false,
            })
            SplashScreen.hide()
        }
    }, [setAuthState])

    useEffect(() => {
        onInitApp()
    }, [setAuthState])

    const logout = async () => {
        await Keychain.resetGenericPassword();
        setAuthState({
            accessToken: null,
            authenticated: false,
        });
    };

    const setGenericPasswordSignIn = async (email, token) => {
        await Keychain.setGenericPassword(email, token);
    };

    const getAccessToken = () => {
        setAuthorizationToken(authState.accessToken)
        return authState.authenticated;
    };

    return (
        <Provider
            value={{
                authState,
                getAccessToken,
                setAuthState,
                setProfile,
                profile,
                setGenericPasswordSignIn,
                logout,
            }}>
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };

