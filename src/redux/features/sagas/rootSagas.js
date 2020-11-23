import { all } from 'redux-saga/effects';


import { placesWatcher, addNewPlaceWatcher, ratingWatcher, checkPlaceWatcher } from './placesSaga';

import { reviewsWatcher, addReviewWatcher } from './reviewsSaga';
import { fivePlacesWatcher } from './fivePlacesSaga';
import {userWatcher} from './authSaga'
export default function* rootSaga() {
  yield all([
    placesWatcher(),
    addReviewWatcher(),
    fivePlacesWatcher(),
    addNewPlaceWatcher(),
    reviewsWatcher(),

    userWatcher(),

    ratingWatcher(),
    checkPlaceWatcher()


  ]);

  // code after all-effect
}
