import { all } from 'redux-saga/effects';
import { progressWatcher } from './progressSaga';

import { placesWatcher, ratingWatcher, checkPlaceWatcher } from './placesSaga';

import { reviewsWatcher, addReviewWatcher } from './reviewsSaga';
import { fivePlacesWatcher } from './fivePlacesSaga';
import { userWatcher, logoutWatcher } from './authSaga';
import { registrationWatcher } from './registrationSaga';
import { sharePlaceWatcher } from './sharePlaceSaga';
export default function* rootSaga() {
  yield all([
    placesWatcher(),
    addReviewWatcher(),
    fivePlacesWatcher(),
    reviewsWatcher(),
    sharePlaceWatcher(),
    userWatcher(),
    registrationWatcher(),
    ratingWatcher(),
    checkPlaceWatcher(),
    logoutWatcher(),
    progressWatcher(),
  ]);

  // code after all-effect
}
