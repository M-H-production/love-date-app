import React, { createContext, useCallback, useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { setAuthorizationToken } from '../Services/Api/instance';

const AuthContext = createContext<any>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    useEffect(() => {
        getToken()
    }, [])


    const getToken = useCallback(async () => {
        const data = await Keychain.getGenericPassword();
        if (data && data.password) {
            setAuthState({
                accessToken: data.password,
                authenticated: true,
            })
        } else {
            setAuthState({
                accessToken: null,
                authenticated: false,
            })
        }
    }, [])
    const [authState, setAuthState] = useState<{ accessToken: string | null, authenticated: boolean | null }>({
        accessToken: null,
        authenticated: null,
    });

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
                setGenericPasswordSignIn,
                logout,
            }}>
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };

