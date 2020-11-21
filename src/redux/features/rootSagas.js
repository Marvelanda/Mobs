import { all } from 'redux-saga/effects';
import { placesWatcher, addReviewWatcher } from './Places/placesSaga';

export default function* rootSaga() {
  yield all([placesWatcher(), addReviewWatcher()]);
  // code after all-effect
}
