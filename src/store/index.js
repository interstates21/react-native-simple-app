import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas';


/* Keep store data in AsyncStorage */
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: "primary",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;