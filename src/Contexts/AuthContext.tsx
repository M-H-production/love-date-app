import React, { createContext, useCallback, useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { setAuthorizationToken } from '../Services/Api/instance';
import { getProfile } from '../Services/home.service';
import SplashScreen from 'react-native-splash-screen';
import { Profile } from '../Models/profile.model';

const AuthContext = createContext<any>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState<{ accessToken: string | null, authenticated: boolean | null }>({
        accessToken: null,
        authenticated: null,
    });
    const [profile, setProfile] = useState<Profile | null>(null);
    const getToken = useCallback(async () => {
        const data = await Keychain.getGenericPassword();
        if (data && data.password) {
            setAuthState({
                accessToken: data.password,
                authenticated: true,
            })
            getProfile().then(
                () => {
                    setProfile(profile)
                }
            )
                .finally(() => SplashScreen.hide())

        } else {
            setAuthState({
                accessToken: null,
                authenticated: false,
            })
        }
    }, [setAuthState])

    useEffect(() => {
        getToken()
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

