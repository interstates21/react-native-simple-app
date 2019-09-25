import {path} from './constants'

export const getData = (data, url) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const request = new Request(`${path}/${url}`, {
        method: "GET",
        headers: headers,
        body: JSON.stringify(data)
    });
    
    return NoJSONRequest(request);
};

