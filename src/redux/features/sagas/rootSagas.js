import { all } from 'redux-saga/effects';

import { placesWatcher, addReviewWatcher, addNewPlaceWatcher, checkPlaceWatcher } from './placesSaga';
import { fivePlacesWatcher } from "./fivePlacesSaga";

export default function* rootSaga() {
  yield all([placesWatcher(), addReviewWatcher(), fivePlacesWatcher(), addNewPlaceWatcher(), checkPlaceWatcher()]);

  // code after all-effect
}
