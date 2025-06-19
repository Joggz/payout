import {authorized, unauthorized} from '../axios.ts'
import {login} from './auth-routes.ts'
import { userLogin, registerBusinessAccount } from '../utilites/serviceType.ts'


export const userlogin = async (payload: userLogin) => {
    try {
        const response = await authorized.post(login, payload);
        console.log('success', response);
        return response.data;

    } catch (error: any) {
        console.error(' error:', error);
        throw error;
    }
};


export const onboardBusiness = async (payload: registerBusinessAccount) => {
    try {
        const response = await unauthorized.post('signup', payload);
        console.log('success', response);
        return response.data;

    } catch (error: any) {
        console.error(' error:', error);
        throw error;
    }
};

