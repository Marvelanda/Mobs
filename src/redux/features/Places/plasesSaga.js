import {put, takeEvery, call} from 'redux-saga/effects'
import { getPlacesList } from './placeSlice'
import {GETPLACESSAGA} from '../../types/placesTypes'

async function getPlases () {
  const resp = await fetch('http://localhost:8080/list');
  const data = await resp.json();
  return data;
}


function* placesWorker () {
  const newList = yield call(getPlases)

  yield put(getPlacesList(newList))
}

function* placesWatcher () {
  yield takeEvery(GETPLACESSAGA, placesWorker)
}


export default placesWatcher
