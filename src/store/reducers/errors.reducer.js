import { TEST_FAILURE, LOGIN_FAILURE, REGISTER_FAILURE } from '../constants';

const initialState = {
    testError: null,
    loginError: null,
    registerError: null
};

export default function errors(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerError: action.payload,
            }
        case TEST_FAILURE:
            return {
                ...state,
                testError: action.payload,
            }
        default:
            return state;
    }
};

