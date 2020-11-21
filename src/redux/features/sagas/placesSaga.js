import { put, takeEvery, call } from 'redux-saga/effects';
import { placesReducer, addPlaceReview } from '../Places/placeSlice';
import { GETPLACESSAGA, ADDPLACESREVIEW } from '../../types/placesTypes';

async function getPlaces() {
  const resp = await fetch('http://localhost:8080/places');
  const data = await resp.json();
  return data;
}

export function* placesWorker() {
  const newList = yield call(getPlaces);
  yield put(placesReducer(newList));
}

export function* placesWatcher() {
  yield takeEvery(GETPLACESSAGA, placesWorker);
}

async function addReview(review, id) {
  const resp = await fetch(`http://localhost:8080/places/${id}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ review }),
  });
  const data = await resp.json();
  return data;
}

export function* addReviewWorker({ review, id }) {
  const response = yield call(() => addReview(review, id));
  console.log(response);
  yield put(addPlaceReview({ response, id }));
}

export function* addReviewWatcher() {
  yield takeEvery(ADDPLACESREVIEW, addReviewWorker);
}
