import { GET_CREATURE_SUCCESS, GET_CREATURE_REQUEST } from '../constants';

const initialState = {
    message: "",
};

const test = (state = initialState, action) => {
    switch (action.type) {
        case GET_CREATURE_SUCCESS:
            return {
                ...state,
                message: action.payload,
            }
        case GET_CREATURE_REQUEST:
            return {
                ...state,
                message: "loading...",
            }
        default:
            return state;
    }
};

export default test;
