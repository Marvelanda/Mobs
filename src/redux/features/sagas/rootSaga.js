import { placesWatcher } from "./placesSaga";
import { fivePlacesWatcher } from "./fivePlacesSaga";
import {all} from 'redux-saga/effects'


export function* rootSaga() {
    yield all([
      placesWatcher(),
      fivePlacesWatcher(),
    ]);
}
