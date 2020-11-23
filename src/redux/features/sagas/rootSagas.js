import { all } from 'redux-saga/effects';

import { placesWatcher, addNewPlaceWatcher } from './placesSaga';
import { reviewsWatcher, addReviewWatcher } from './reviewsSaga';
import { fivePlacesWatcher } from './fivePlacesSaga';
import { sharePlaceWatcher } from './sharePlaceSaga'

export default function* rootSaga() {
  yield all([
    placesWatcher(),
    addReviewWatcher(),
    fivePlacesWatcher(),
    addNewPlaceWatcher(),
    reviewsWatcher(),
    sharePlaceWatcher(),
  ]);

  // code after all-effect
}
