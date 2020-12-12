import { put, takeEvery, call } from 'redux-saga/effects';
import {
  placesReducer,
  addPlaceRating,
  checkPlace,
} from '../Places/placeSlice';

import { progressReducer } from '../Places/progressSlice';
import { addUsersPlace } from '../Places/fivePlacesSlice';

import {
  Types,
  CheckPlaceSaga,
  AddPlaceRatingSaga,
} from '../../types/placesTypes';

async function getPlaces() {
  const resp = await fetch('http://localhost:8080/places', {
    method: 'GET',
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

export function* placesWorker() {
  const newList = yield call(() => getPlaces());
  yield put(placesReducer({ places: newList.list, visited: newList.visited }));
}

export function* placesWatcher() {
  yield takeEvery(Types.GETPLACESSAGA, placesWorker);
}

async function addRating(id: string, stars: number) {
  const resp = await fetch(`http://localhost:8080/places/${id}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ stars }),
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

export function* ratingWorker({ id, stars }: AddPlaceRatingSaga) {
  const response = yield call(() => addRating(id, stars));
  yield put(addPlaceRating(response));
}
export function* ratingWatcher() {
  yield takeEvery(Types.ADDPLACERATING, ratingWorker);
}

async function checkUserPlace(
  latitude: number,
  longitude: number,
  user: string
) {
  const resp = await fetch(`http://localhost:8080/places/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ latitude, longitude, userID: user }),
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

export function* checkPlaceWorker({
  latitude,
  longitude,
  user,
}: CheckPlaceSaga) {
  const response = yield call(() => checkUserPlace(latitude, longitude, user));
  yield put(checkPlace(response));
  if (response.points) {
    yield put(progressReducer(response));
    yield put(addUsersPlace(response.newPlace));
  }
}

export function* checkPlaceWatcher() {
  yield takeEvery(Types.CHECKPLACE, checkPlaceWorker);
}
