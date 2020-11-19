import { applyMiddleware } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas';
import { configureStore } from '@reduxjs/toolkit';

const rootSagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer });

rootSagaMiddleware.run(rootSaga);

export default store;
