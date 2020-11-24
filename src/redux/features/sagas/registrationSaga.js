import { put, takeEvery, call } from 'redux-saga/effects';
import { newUserName } from '../Places/authSlice';
import { ADDUSER } from '../../types/users';

async function addUser(userName, email, password, fivePlaces) {
  try {
    const response = await fetch('http://192.168.1.206:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, password, email, fivePlaces }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const json = await response.json();

    if (json.done) {
      localStorage.setItem('user', json.userid);
    }
    console.log(json);
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* registrationWorker({ email, userName, password, fivePlaces }) {
  const user = yield call(addUser, email, userName, password, fivePlaces);
  console.log(user);
  yield put(
    newUserName({
      userName: user.userid,
      status: user.status,
      error: user.error,
    })
  );
}

export function* registrationWatcher() {
  yield takeEvery(ADDUSER, registrationWorker);
}
