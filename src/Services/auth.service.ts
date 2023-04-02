
import { IResponseModel } from "../Utils/Models/i-response-model";
import { Post } from './Api'

export function validateToken(payload: { token: string, token_type: string }): Promise<IResponseModel<string>> {
    const url = 'validate-token';
    return Post(url, payload);
};


