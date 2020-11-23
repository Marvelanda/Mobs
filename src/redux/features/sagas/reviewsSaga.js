import { put, takeEvery, call } from 'redux-saga/effects';
import { reviewsReducer, addPlaceReview } from '../Places/reviewSlice';
import { GETPLACESREVIEW, ADDPLACESREVIEW } from '../../types/placesTypes';

async function getReviews(id) {
  const resp = await fetch(`http://localhost:8080/places/${id}/reviews`);
  const data = await resp.json();
  return data;
}

export function* reviewsWorker({ id }) {
  const newList = yield call(() => getReviews(id));
  yield put(reviewsReducer(newList));
}

export function* reviewsWatcher() {
  yield takeEvery(GETPLACESREVIEW, reviewsWorker);
}

async function addReview(review, stars, pecularities, id) {
  const user = sessionStorage.user;
  const resp = await fetch(`http://localhost:8080/places/${id}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ review, stars, pecularities, userId: user }),
  });
  const data = await resp.json();
  return data;
}

export function* addReviewWorker({ review, stars, pecularities, id }) {
  const response = yield call(() => addReview(review, stars, pecularities, id));
  yield put(addPlaceReview({ response, id }));
}

export function* addReviewWatcher() {
  yield takeEvery(ADDPLACESREVIEW, addReviewWorker);
}
