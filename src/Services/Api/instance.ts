import axios, { AxiosError } from "axios";
import { ErrorHandeling } from "./error-handling";

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
    function (error: AxiosError) {
        ErrorHandeling(error.response!)
        return Promise.reject(error);
    }
);