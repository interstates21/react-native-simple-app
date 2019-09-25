import { put, call } from 'redux-saga/effects'

import { getCreatureFailure } from "../actions/error.actions";
import { getCreatureSuccess } from "../actions/test.actions";


const testUrl = "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3"

export function* getCreatureAsync() {
    try {
        const data = yield call(() => fetch(testUrl).then((res) => res.json()));
        console.log("data", data);
        yield put(getCreatureSuccess(data));
    } catch (err) {
        yield put(getCreatureFailure(err));
    }
}
