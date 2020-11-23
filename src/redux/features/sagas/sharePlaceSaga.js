import { put, takeEvery, call } from 'redux-saga/effects';
import { shareStatusReducer } from '../Places/sharePlaceSlice';
import { SHARE_PLACE_SAGA } from '../../types/placesTypes';

async function sharePlace(username, placeID) {
  const res = await fetch(`http://localhost:8080/places/${placeID}/share`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });
  const data = await res.json();
  return data
}

export function* sharePlaceWorker({username, placeID}) {
  const shareStatus = yield call(sharePlace, username, placeID);
  yield put(shareStatusReducer(shareStatus));
}

export function* sharePlaceWatcher() {
  yield takeEvery(SHARE_PLACE_SAGA, sharePlaceWorker);
}