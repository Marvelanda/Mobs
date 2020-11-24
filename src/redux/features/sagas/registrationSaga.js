import { put, takeEvery, call } from 'redux-saga/effects';
import { newUserName } from '../Places/authSlice';
import { ADDUSER } from '../../types/users';

async function addUser(username, email, password, fivePlaces) {
  try {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password, email, fivePlaces }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (json.done) {
      localStorage.setItem('user', json.userid);
    }
    console.log(json);
    return json
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* registrationWorker({ email, username, password, fivePlaces }) {
  const user = yield call(addUser, email, username, password, fivePlaces);
  console.log(user);
  yield put(newUserName(user.userid));
}

export function* registrationWatcher() {
  yield takeEvery(ADDUSER, registrationWorker);
}
