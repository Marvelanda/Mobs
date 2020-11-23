import placeReducer from './features/Places/placeSlice';
import fivePlaceReducer from './features/Places/fivePlacesSlice';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './features/sagas/rootSagas';
import authReducer from './features/Places/authSlice';
import reviewsReducer from './features/Places/reviewSlice';
import shareStatusReducer from './features/Places/sharePlaceSlice'
const rootSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    places: placeReducer,
    fivePlaces: fivePlaceReducer,
    auth: authReducer,
    reviews: reviewsReducer,
    sharedPlace: shareStatusReducer,
  },
  middleware: [rootSagaMiddleware],
});

rootSagaMiddleware.run(rootSaga);

export default store;
