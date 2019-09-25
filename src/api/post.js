import { defaultPath } from './constants'
import { EmptyRequest } from './request'

export const postData = (data, url, path = defaultPath) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const request = new Request(`${path}/${url}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });

    return EmptyRequest(request);
};

