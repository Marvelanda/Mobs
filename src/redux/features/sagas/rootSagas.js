import { all } from 'redux-saga/effects';
import { placesWatcher, addReviewWatcher } from './placesSaga';
import { fivePlacesWatcher } from "./fivePlacesSaga";

export default function* rootSaga() {
  yield all([placesWatcher(), addReviewWatcher(), fivePlacesWatcher()]);
  // code after all-effect
}
