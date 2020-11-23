import { all } from 'redux-saga/effects';


import { placesWatcher, addNewPlaceWatcher, ratingWatcher, checkPlaceWatcher } from './placesSaga';

import { reviewsWatcher, addReviewWatcher } from './reviewsSaga';
import { fivePlacesWatcher } from './fivePlacesSaga';
import {userWatcher} from './authSaga'
import {sharePlaceWatcher} from './sharePlaceSaga'
export default function* rootSaga() {
  yield all([
    placesWatcher(),
    addReviewWatcher(),
    fivePlacesWatcher(),
    addNewPlaceWatcher(),
    reviewsWatcher(),
    sharePlaceWatcher(),
    userWatcher(),
    ratingWatcher(),
    checkPlaceWatcher()
  ]);

  // code after all-effect
}
