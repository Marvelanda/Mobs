import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlaceActionTypes, Types, ShareState } from '../../types/placesTypes';

const initialState: ShareState = {
  shareStatus: '',
};

export const sharePlaceSlice = createSlice({
  name: 'sharedPlace',
  initialState,
  reducers: {
    shareStatusReducer: (state, action: PayloadAction<string>) => {
      state.shareStatus = action.payload;
    },

    changeShareStatus: (state, action: PayloadAction<string>) => {
      state.shareStatus = action.payload;
    },
  },
});

export const {
  shareStatusReducer,
  changeShareStatus,
} = sharePlaceSlice.actions;

export const sharePlaceSaga = (
  username: string,
  placeID: string
): PlaceActionTypes => {
  return {
    type: Types.SHARE_PLACE_SAGA,
    username,
    placeID,
  };
};

export default sharePlaceSlice.reducer;
