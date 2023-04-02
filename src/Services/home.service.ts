
import { Profile } from "../Models/profile.model";
import { IResponseModel } from "../Utils/Models/i-response-model";
import { Get } from './Api'


export function getProfile(): Promise<IResponseModel<Profile>> {
    const url = 'profiles/get-one';
    return Get(url);
}