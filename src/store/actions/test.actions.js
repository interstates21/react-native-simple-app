import {GET_CREATURE_REQUEST, GET_CREATURE_SUCCESS} from '../constants'

export function getCreatureRequest() {
    return {
        type: GET_CREATURE_REQUEST
    };
}

export function getCreatureSuccess(payload) {
    return {
        type: GET_CREATURE_SUCCESS,
        payload
    };
}