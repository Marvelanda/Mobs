import {put, takeEvery, call} from 'redux-saga/effects'
import { placesReducer } from '../Places/placeSlice'
import {GETPLACESSAGA} from '../../types/placesTypes'

async function getPlaces () {
  console.log('>>>>>>>>>>>>>>>.Send request SAGA');
  const resp = await fetch('http://localhost:8080/list');
  const data = await resp.json();
  return data;
}


function* placesWorker () {
  const newList = yield call(getPlaces)
console.log(newList);
  yield put(placesReducer(newList))
}

export function* placesWatcher () {
  yield takeEvery(GETPLACESSAGA, placesWorker)
}



