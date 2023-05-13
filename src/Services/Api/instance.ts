import axios, { AxiosError } from "axios";
import { ErrorHandeling } from "./error-handling";

export const axiosInstance = axios.create({
    baseURL: "https://api.lovedateapp.com",
});


export const setAuthorizationToken = (token: string | null) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axiosInstance.interceptors.request.use(
    function (config) {
        const requestConfig = { ...config };
        console.log('auth', requestConfig.headers['Authorization'])
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
    function (error: AxiosError) {
        ErrorHandeling(error.response!)
        return Promise.reject(error);
    }
);