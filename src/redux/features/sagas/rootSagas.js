import { all } from 'redux-saga/effects';

import { placesWatcher, addNewPlaceWatcher, checkPlaceWatcher } from './placesSaga';
import { reviewsWatcher, addReviewWatcher } from './reviewsSaga';
import { fivePlacesWatcher } from './fivePlacesSaga';

export default function* rootSaga() {
  yield all([
    placesWatcher(),
    addReviewWatcher(),
    fivePlacesWatcher(),
    addNewPlaceWatcher(),
    reviewsWatcher(),
    checkPlaceWatcher()
  ]);

  // code after all-effect
}
