import { put, call } from 'redux-saga/effects'

import { getCreatureFailure } from "../actions/error.actions";
import { getCreatureSuccess } from "../actions/test.actions";
import { getCreatureAPI } from '../../api'



export function* getCreatureAsync() {
    try {
        const data = yield call(getCreatureAPI);
        console.log("data", data);
        yield put(getCreatureSuccess(data));
    } catch (err) {
        yield put(getCreatureFailure(err));
    }
}
