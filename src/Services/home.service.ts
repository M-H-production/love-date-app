
import { partner } from "../Models/partner.model";
import { Profile } from "../Models/profile.model";
import { IResponseModel } from "../Models/i-response-model";
import { Delete, Get, Post, Put } from './Api'


export function getProfile(): Promise<IResponseModel<Profile>> {
    const url = 'profiles/get-one';
    return Get(url);
}

export function createProfile(payload: Profile): Promise<IResponseModel<Profile>> {
    const url = 'profiles/create';
    return Post(url, { ...payload });
}

export function editProfile(payload: partner): Promise<IResponseModel<partner>> {
    const url = 'profiles/update';
    return Put(url, { ...payload });
}


export function getActivePartner(): Promise<IResponseModel<partner>> {
    const url = 'partners/get-active';
    return Get(url);
}


export function createPartner(payload: partner): Promise<IResponseModel<partner>> {
    const url = 'partners/create';
    return Post(url, { ...payload });
}

export function editPartner(payload: partner): Promise<IResponseModel<partner>> {
    const url = 'partners/update';
    return Put(url, { ...payload });
}

export function deletePartner(): Promise<IResponseModel<boolean>> {
    const url = 'partners/delete';
    return Delete(url);
}

export function getspecialDay(): Promise<IResponseModel<{ [key: string]: string }[]>> {
    const url = 'app/special-day';
    return Get(url);
}
