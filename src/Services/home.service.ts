
import { partner } from "../Models/partner.model";
import { Profile } from "../Models/profile.model";
import { IResponseModel } from "../Utils/Models/i-response-model";
import { Get, Post } from './Api'


export function getProfile(): Promise<IResponseModel<Profile>> {
    const url = 'profiles/get-one';
    return Get(url);
}

export function createProfile(payload: Profile): Promise<IResponseModel<Profile>> {
    const url = 'profiles/get-one';
    return Post(url, { ...payload });
}

export function getspecialDay(): Promise<IResponseModel<{ [key: string]: string }[]>> {
    const url = 'app/special-day';
    return Get(url);
}

export function getActivePartner(): Promise<IResponseModel<partner>> {
    const url = 'partners/get-active';
    return Get(url);
}