import { put, takeEvery, call } from 'redux-saga/effects';
import { progressReducer } from '../Places/progressSlice';
import { Types } from '../../types/users';

async function getProgress() {
  const res = await fetch(`http://localhost:8080/user/progress`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await res.json();
  return data;
}

export function* progressWorker() {
  const progress = yield call(() => getProgress());
  yield put(
    progressReducer({ points: progress.points, rating: progress.rating })
  );
}

export function* progressWatcher() {
  yield takeEvery(Types.USERRATING, progressWorker);
}
