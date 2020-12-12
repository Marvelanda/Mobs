import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Types,
  FivePlacesState,
  PlaceActionTypes,
  ModalState,
} from '../../types/placesTypes';

const initialState: FivePlacesState = {
  fivePlaces: [],
};

const fivePlacesSlice = createSlice({
  name: 'fivePlaces',
  initialState,
  reducers: {
    fivePlacesReducer(state, action: PayloadAction<ModalState[]>) {
      state.fivePlaces = action.payload;
    },

    addUsersPlace(state, action: PayloadAction<ModalState>) {
      state.fivePlaces.push(action.payload);
    },
  },
});

export const { fivePlacesReducer, addUsersPlace } = fivePlacesSlice.actions;

export const getFivePlacesSaga = (): PlaceActionTypes => {
  return {
    type: Types.GET_FIVE_PLACES,
  };
};

export default fivePlacesSlice.reducer;
