import { put, takeEvery, call } from 'redux-saga/effects';
import { newUserName, logoutUser } from '../Places/authSlice';
import { GetUser, Types } from '../../types/users';

async function getUser(email: string, password: string) {
  try {
    const response = await fetch('http://localhost:8080/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const json = await response.json();

    if (json.status) {
      localStorage.setItem('user', json.userid);
    }
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* userWorker({ email, password }: GetUser) {
  const user = yield call(getUser, email, password);

  yield put(
    newUserName({
      userName: user.userid,
      status: user.status,
      error: user.error,
    })
  );
}

export function* userWatcher() {
  yield takeEvery(Types.GETUSER, userWorker);
}

async function fetchLogout() {
  try {
    const response = await fetch('http://localhost:8080/auth/logout', {
      method: 'GET',
      credentials: 'include',
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* logoutWorker() {
  const user = yield call(fetchLogout);
  yield put(
    logoutUser({
      status: user.status,
    })
  );
}

export function* logoutWatcher() {
  yield takeEvery(Types.REMOVEUSER, logoutWorker);
}
