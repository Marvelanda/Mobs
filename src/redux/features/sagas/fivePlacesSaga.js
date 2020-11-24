import { put, takeEvery, call } from 'redux-saga/effects';
import { fivePlacesReducer } from '../Places/fivePlacesSlice';
import { GET_FIVE_PLACES } from '../../types/placesTypes';

async function getFivePlaces() {
  const user = localStorage.user;

  const resp = await fetch('http://localhost:8080', {
    method: 'GET',
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

function* fivePlacesWorker() {
  const newList = yield call(getFivePlaces);
  yield put(fivePlacesReducer(newList));
}

export function* fivePlacesWatcher() {
  yield takeEvery(GET_FIVE_PLACES, fivePlacesWorker);
}
