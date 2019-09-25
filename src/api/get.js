import {defaultPath} from './constants'
import { EmptyRequest, JSONRequest } from './request';

export const getData = (url, path = defaultPath) => {

    const headers = {
        "Content-Type": "application/json"
    }
    const request = new Request(`${path}/${url}`, {
        method: "GET",
        headers: headers,
    });
    
    return JSONRequest(request);
};

