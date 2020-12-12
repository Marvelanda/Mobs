import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Types, UserRatingState, ActionTypes } from '../../types/users';

const initialState: UserRatingState = {
  points: 0,
  rating: 1,
};

export const userRatingSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    progressReducer: (state, action: PayloadAction<UserRatingState>) => {
      state.points = action.payload.points;
      state.rating = action.payload.rating;
    },
  },
});

export const { progressReducer } = userRatingSlice.actions;

export const getUserRatingSaga = (): ActionTypes => {
  return {
    type: Types.USERRATING,
  };
};

export default userRatingSlice.reducer;
