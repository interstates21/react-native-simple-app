import { takeLatest } from 'redux-saga/effects';
import { getCreatureAsync } from './test.saga';
import { GET_CREATURE_REQUEST } from '../constants'

function* watch() {
    yield takeLatest(GET_CREATURE_REQUEST, getCreatureAsync);
}

export default watch
