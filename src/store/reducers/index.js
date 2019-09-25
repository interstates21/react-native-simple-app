import { combineReducers } from 'redux'
import errors from './errors.reducer';
import test from './test.reducer';

const rootReducer = combineReducers({
    test,
    errors
});

export default rootReducer;
