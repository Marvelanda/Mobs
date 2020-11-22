import placeReducer from './features/Places/placeSlice';
import fivePlaceReducer from './features/Places/fivePlacesSlice'
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './features/sagas/rootSagas';

const rootSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    places: placeReducer,
    fivePlaces: fivePlaceReducer,
  },
  middleware: [rootSagaMiddleware],
});

rootSagaMiddleware.run(rootSaga);

export default store;
