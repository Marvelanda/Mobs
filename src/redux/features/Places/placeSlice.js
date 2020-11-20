import {
  createSlice
} from '@reduxjs/toolkit';
import {
  GETPLACESSAGA
} from '../../types/placesTypes'

export const placeSlice = createSlice({
  name: 'places',
  initialState: {
    places: []
  },
  reducers: {
    placesReducer: (state, action) => {
      state.places = action.payload
    }
  },
});

export const {
  placesReducer
} = placeSlice.actions

export const getPlacesListSaga = () => {
  return {
    type: GETPLACESSAGA
  }
}

export default placeSlice.reducer
