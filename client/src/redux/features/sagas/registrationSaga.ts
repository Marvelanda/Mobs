import { put, takeEvery, call } from 'redux-saga/effects';
import { newUserName } from '../Places/authSlice';
import { AddUser, Types } from '../../types/users';
import { ModalState } from '../../types/placesTypes';

async function addUser(
  userName: string,
  email: string,
  password: string,
  fivePlaces: ModalState[]
) {
  try {
    const response = await fetch('http://localhost:8080/auth/signup', {
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
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* registrationWorker({
  email,
  userName,
  password,
  fivePlaces,
}: AddUser) {
  const user = yield call(addUser, email, userName, password, fivePlaces);
  yield put(
    newUserName({
      userName: user.userid,
      status: user.status,
      error: user.error,
    })
  );
}

export function* registrationWatcher() {
  yield takeEvery(Types.ADDUSER, registrationWorker);
}
