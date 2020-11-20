import { createSlice } from '@reduxjs/toolkit';
import {GETPLACESSAGA} from '../../types/placesTypes'

export const placeSlice = createSlice({
  name: 'places',
  initialState: [],
  reducers: {
    placesReducer: (state, action) => {
      state = action.payload
    }
  },
});

export const {getPlacesList} = placeSlice.actions

export const getPlacesListSaga = () => {
  return {
    type: GETPLACESSAGA
  }
}

export default placeSlice.reducer
