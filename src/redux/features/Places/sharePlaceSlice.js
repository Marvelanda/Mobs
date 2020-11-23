import { createSlice } from '@reduxjs/toolkit';

import { SHARE_PLACE_SAGA } from '../../types/placesTypes';

export const sharePlaceSlice = createSlice({
  name: 'sharedPlace',
  initialState:{
    shareStatus: '', 
  },
  reducers: {
    shareStatusReducer: (state, action) => {
      state.shareStatus = action.payload;
    }
  }
})

export const { shareStatusReducer } = sharePlaceSlice.actions;

export const sharePlaceSaga = (username, placeID) => {
  return {
    type: SHARE_PLACE_SAGA,
    username,
    placeID
  }
}

export default sharePlaceSlice.reducer
