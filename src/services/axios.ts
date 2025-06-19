import axios, { InternalAxiosRequestConfig } from 'axios';

import { useAppStore } from '../store';
import {REACT_APP_API_URL} from "./utilites/config";


export const authorized = axios.create({
    baseURL: REACT_APP_API_URL,
});
export const unauthorized = axios.create({
    baseURL: REACT_APP_API_URL,
})


authorized.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        const token = useAppStore.getState()['token'];


        if (config.headers) {
            config.headers.set('Authorization', `bearer ${token}`);
            // if (!config.headers['Content-Type']) {
            //     config.headers['Content-Type'] = 'application/json';
            // }
        }

        console.log("Request URL:", config.url);
        console.log("Request Headers:", config.headers);

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

