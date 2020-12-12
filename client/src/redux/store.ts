import placeReducer from './features/Places/placeSlice';
import fivePlaceReducer from './features/Places/fivePlacesSlice';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootSaga from './features/sagas/rootSagas';
import authReducer from './features/Places/authSlice';
import reviewsReducer from './features/Places/reviewSlice';
import shareStatusReducer from './features/Places/sharePlaceSlice';
import progressReducer from './features/Places/progressSlice';
const rootSagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  places: placeReducer,
  fivePlaces: fivePlaceReducer,
  reviews: reviewsReducer,
  sharedPlace: shareStatusReducer,
  progress: progressReducer,
});

const store = configureStore({
  reducer,
  middleware: [rootSagaMiddleware],
});

rootSagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>;
export default store;
