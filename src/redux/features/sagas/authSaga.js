import { put, takeEvery, call } from 'redux-saga/effects';
import { newUserName } from '../Places/authSlice';
import { GETUSER} from '../../types/users';

async function getUser(email, password) {
  try {
    const response = await fetch('http://localhost:8080/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    
    if (json.auth) {
      localStorage.setItem('user', json.userid);
    }
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* userWorker({ email, password }) {
  const user = yield call(getUser, email, password);
  console.log(user);
  yield put(newUserName(user.userid));
}

export function* userWatcher() {
  yield takeEvery(GETUSER, userWorker);
}


