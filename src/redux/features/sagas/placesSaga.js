import { put, takeEvery, call } from 'redux-saga/effects';

import {
  placesReducer,
  addNewPlace,
  addPlaceRating,
  checkPlace
} from '../Places/placeSlice';
import {
  GETPLACESSAGA,
  ADDNEWPLACE,
  ADDPLACERATING,
  CHECKPLACE
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
  yield put(addNewPlace(response));
}

export function* addNewPlaceWatcher() {
  yield takeEvery(ADDNEWPLACE, addNewPlaceWorker);
}


async function addRating(id, stars) {
  const resp = await fetch(`http://localhost:8080/places/${id}/ratings`, {


async function checkUserPlace() {
  

  const resp = await fetch(`http://localhost:8080/places/check`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ stars }),
  });
  const data = await resp.json();
  return data;
}

export function* ratingWorker({ id, stars }) {
  const response = yield call(() => addRating(id, stars));
  yield put(addPlaceRating(response));
}

export function* ratingWatcher() {
  yield takeEvery(ADDPLACERATING, ratingWorker);

    body: JSON.stringify({ }),
  });
  
  const data = await resp.text();
  return console.log(data);
}

export function* checkPlaceWorker() {
  const response = yield call(() => checkUserPlace());
  yield put(checkPlace(response));
}

export function* checkPlaceWatcher() {
  yield takeEvery(CHECKPLACE, checkPlaceWorker);

}
