import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {
  configureStore
} from '@reduxjs/toolkit';
import {rootSaga} from './features/sagas/rootSaga';

const rootSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [rootSagaMiddleware],
});

rootSagaMiddleware.run(rootSaga);

export default store;
