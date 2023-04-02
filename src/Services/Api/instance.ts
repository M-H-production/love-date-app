import axios from "axios";
import Toast from "react-native-toast-message";

export const axiosInstance = axios.create({
    baseURL: "http://192.168.1.79:8001/",
});

let jwtToken: string | null = null

export const setAuthorizationToken = (token: string | null) => {
    jwtToken = token ? `Bearer ${token}` : null
}

axiosInstance.interceptors.request.use(
    function (config) {
        const requestConfig = { ...config };
        requestConfig.headers!['Authorization'] = jwtToken
        requestConfig.headers!['Content-Type'] = 'application/json';
        requestConfig.headers!['Accept'] = 'application/json';
        return requestConfig;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log('data', error);
        console.log(error.response.data.message);
        console.log(error.response.status);
        // if (error.response.status === 401) {
        //     Keychain.resetGenericPassword().then()
        // }

        Toast.show({
            type: 'error',
            text1: error?.response?.data?.message,
        })
        return Promise.reject(error);
    }
);