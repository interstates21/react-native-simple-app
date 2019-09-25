import {path} from './constants'

export const postData = (data, url) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const request = new Request(`${path}/${url}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
    
    return NoJSONRequest(request);
};

