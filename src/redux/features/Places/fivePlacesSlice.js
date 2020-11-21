import { createSlice, createAction } from '@reduxjs/toolkit';
import { GET_FIVE_PLACES } from '../../types/placesTypes';

const fivePlacesSlice = createSlice({
  name: 'fivePlaces',
  initialState: {
    fivePlaces: [],
  },
  reducers: {
    fivePlacesReducer(state, action) {
      state.fivePlaces = action.payload;
    },
  },
});

export const { fivePlacesReducer } = fivePlacesSlice.actions;

export const getFivePlacesSaga = () => {
  return {
    type: GET_FIVE_PLACES,
  };
};

export default fivePlacesSlice.reducer;
