import {GET_CREATURE_FAILURE, LOGIN_FAILURE, REGISTER_FAILURE} from '../constants'

export function getCreatureFailure(payload) {
    return {
        type: GET_CREATURE_FAILURE,
        payload
    };
}

export function loginFailure(payload) {
    return {
        type: LOGIN_FAILURE,
        payload
    };
}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload
    };
}