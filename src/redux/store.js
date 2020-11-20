import {
  applyMiddleware
} from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {
  configureStore
} from '@reduxjs/toolkit';
import placesWatcher from './features/Places/plasesSaga';

const rootSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [rootSagaMiddleware],
});

rootSagaMiddleware.run(placesWatcher);

export default store;
