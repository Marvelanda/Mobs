import { all } from 'redux-saga/effects';
import { placesWatcher, addReviewWatcher, addNewPlaceWatcher } from './Places/placesSaga';

export default function* rootSaga() {
  yield all([placesWatcher(), addReviewWatcher(), addNewPlaceWatcher()]);
  // code after all-effect
}
