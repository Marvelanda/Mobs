import { put, takeEvery, call } from 'redux-saga/effects';
import { shareStatusReducer } from '../Places/sharePlaceSlice';
import { progressReducer } from '../Places/progressSlice';
import { SHARE_PLACE_SAGA } from '../../types/placesTypes';

async function sharePlace(friend, placeID) {
  const res = await fetch(`http://localhost:8080/places/${placeID}/share`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friend }),
    credentials: 'include',
  });
  const data = await res.json();
  return data;
}

export function* sharePlaceWorker({ username, placeID }) {
  const shareStatus = yield call(sharePlace, username, placeID);
  console.log(shareStatus);
  if (shareStatus) {
    yield put(shareStatusReducer(shareStatus.message));
    if (shareStatus.points) {
      yield put(progressReducer(shareStatus));
    }
  }
}

export function* sharePlaceWatcher() {
  yield takeEvery(SHARE_PLACE_SAGA, sharePlaceWorker);
}
