import { put, takeEvery, call } from 'redux-saga/effects';
import { fivePlacesReducer } from '../Places/fivePlacesSlice';
import { GET_FIVE_PLACES } from '../../types/placesTypes';

async function getFivePlaces() {
  const user = localStorage.user;

  const resp = await fetch('http://192.168.1.206:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: user }),
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
