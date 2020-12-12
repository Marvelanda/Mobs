import { put, takeEvery, call } from 'redux-saga/effects';
import { reviewsReducer, addPlaceReview } from '../Places/reviewSlice';
import {
  Types,
  IReview,
  AddPlaceReviewSaga,
  GetReviewsListSaga,
} from '../../types/placesTypes';

async function getReviews(id: string) {
  const resp = await fetch(`http://localhost:8080/places/${id}/reviews`);
  const data = await resp.json();
  return data;
}

export function* reviewsWorker({ id }: GetReviewsListSaga) {
  const newList = yield call(() => getReviews(id));
  yield put(reviewsReducer(newList));
}

export function* reviewsWatcher() {
  yield takeEvery(Types.GETPLACESREVIEW, reviewsWorker);
}

async function addReview(
  review: string,
  pecularities: string,
  id: string
): Promise<IReview> {
  const resp = await fetch(`http://localhost:8080/places/${id}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ review, pecularities }),
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

export function* addReviewWorker({
  review,
  pecularities,
  id,
}: AddPlaceReviewSaga) {
  const response: IReview = yield call(() =>
    addReview(review, pecularities, id)
  );
  yield put(addPlaceReview(response));
}

export function* addReviewWatcher() {
  yield takeEvery(Types.ADDPLACESREVIEW, addReviewWorker);
}
