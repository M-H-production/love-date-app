import { AxiosResponse } from 'axios';
import { axiosInstance } from './instance'
import { IResponseModel } from '../../Models/i-response-model';

export function Get(url: string, params?: any): Promise<IResponseModel<any>> {
    const headers: any = {
        'Content-Type': 'application/json',
    };

    return axiosInstance({
        method: 'get',
        url,
        headers,
        params,
    }).then((res: any) => res.data);
}

export function Post<T>(url: string, payload: T): Promise<IResponseModel<any>> {
    const headers: any = {
        'Content-Type': 'application/json',
    };

    return axiosInstance({
        method: 'post',
        data: payload,
        headers,
        url,
    }).then((res: AxiosResponse<IResponseModel<any>>) => res.data);
}

export function Put<T>(url: string, payload?: T): Promise<IResponseModel<any>> {
    const headers: any = {
        'Content-Type': 'application/json',
    };

    return axiosInstance({
        method: 'put',
        data: payload,
        headers,
        url,
    }).then((res: AxiosResponse<IResponseModel<any>>) => res.data);
}

export function Patch<T>(url: string, payload?: T): Promise<IResponseModel<any>> {
    const headers: any = {
        'Content-Type': 'application/json',
    };

    return axiosInstance({
        method: 'patch',
        data: payload,
        headers,
        url,
    }).then((res: AxiosResponse<IResponseModel<any>>) => res.data);
}

export function Delete(url: string, payload?: any,): Promise<IResponseModel<any>> {
    const headers: any = {
        'Content-Type': 'application/json',
    };
    return axiosInstance({
        method: 'delete',
        data: payload,
        headers,
        url,
    }).then((res: AxiosResponse<IResponseModel<any>>) => res.data);
}
