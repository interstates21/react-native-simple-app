import {LOGIN_REQUEST, LOGIN_SUCCESS} from '../constants'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    };
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
}