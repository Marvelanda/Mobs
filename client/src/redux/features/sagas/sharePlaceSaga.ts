import { put, takeEvery, call } from 'redux-saga/effects';
import { shareStatusReducer } from '../Places/sharePlaceSlice';
import { progressReducer } from '../Places/progressSlice';
import { SharePlaceSaga, Types } from '../../types/placesTypes';

async function sharePlace(friend: string, placeID: string) {
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

export function* sharePlaceWorker({ username, placeID }: SharePlaceSaga) {
  const shareStatus = yield call(sharePlace, username, placeID);
  if (shareStatus) {
    yield put(shareStatusReducer(shareStatus.message));
    if (shareStatus.points) {
      yield put(progressReducer(shareStatus));
    }
  }
}

export function* sharePlaceWatcher() {
  yield takeEvery(Types.SHARE_PLACE_SAGA, sharePlaceWorker);
}
