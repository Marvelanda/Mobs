import {put, takeEvery, call} from 'redux-saga/effects'
import { fivePlacesReducer } from '../Places/fivePlacesSlice'
import {GET_FIVE_PLACES} from '../../types/placesTypes'

async function getFivePlaces() {
  console.log('>>>>>>>>>>>>>>>.Send request SAGA');
  const resp = await fetch('http://localhost:8080');
  const data = await resp.json();
  console.log('FROM FETCH SAGA', data);
  return data;
}


function* fivePlacesWorker() {
  yield console.log('HELLO!')
  const newList = yield call(getFivePlaces)
  console.log(newList);
  yield put(fivePlacesReducer(newList))
}

export function* fivePlacesWatcher() {
  yield takeEvery(GET_FIVE_PLACES, fivePlacesWorker)
}

