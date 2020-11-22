import { put, takeEvery, call } from 'redux-saga/effects';
import {
  placesReducer,
  addPlaceReview,
  addNewPlace,
} from '../Places/placeSlice';
import {
  GETPLACESSAGA,
  ADDPLACESREVIEW,
  ADDNEWPLACE,
} from '../../types/placesTypes';

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

async function addPlace(
  placeName,
  placeUrl,
  placePhotoUrl,
  address,
  phone,
  workingHours,
  category,
  rating,
  geometry,
  description
) {
  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADD NEW PLACE FROM SAGA',
    address
  );
  const resp = await fetch(`http://localhost:8080/places/new`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      placeName,
      placeUrl,
      placePhotoUrl,
      address,
      tel: phone,
      workingHours,
      category,
      rating,
      geometry,
      description,
    }),
  });
  const data = await resp.json();
  console.log(data);
  return data;
}

export function* addNewPlaceWorker({
  placeName,
  placeUrl,
  placePhotoUrl,
  address,
  phone,
  workingHours,
  category,
  rating,
  geometry,
  description,
}) {
  const response = yield call(() =>
    addPlace(
      placeName,
      placeUrl,
      placePhotoUrl,
      address,
      phone,
      workingHours,
      category,
      rating,
      geometry,
      description
    )
  );
  console.log('>>>>>>>>>>>>>>>>.addnewplaceWorker', response);
  yield put(addNewPlace(response));
}

export function* addNewPlaceWatcher() {
  yield takeEvery(ADDNEWPLACE, addNewPlaceWorker);
  console.log('............Watcher in work');
}
