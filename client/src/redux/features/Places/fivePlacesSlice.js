import { createSlice } from '@reduxjs/toolkit';
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

    addUsersPlace(state, action) {
      state.fivePlaces.push(action.payload);
    },
  },
});

export const { fivePlacesReducer, addUsersPlace } = fivePlacesSlice.actions;

export const getFivePlacesSaga = () => {
  return {
    type: GET_FIVE_PLACES,
  };
};

export default fivePlacesSlice.reducer;