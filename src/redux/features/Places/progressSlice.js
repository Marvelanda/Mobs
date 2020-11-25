import { createSlice } from '@reduxjs/toolkit';
import { USERRATING } from '../../types/users'

export const userRatingSlice = createSlice({
  name: 'progress',
  initialState: {
    points: 0,
    rating: 1
  },
  reducers: {
    progressReducer: (state, action) => {
      state.points = action.payload.points;
      state.rating = action.payload.rating;
    },
  },
});

export const {
  progressReducer,
} = userRatingSlice.actions;

export const getUserRatingSaga = () => {
  return {
    type: USERRATING,
  };
};

export default userRatingSlice.reducer;
