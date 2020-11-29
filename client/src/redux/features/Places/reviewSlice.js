import { createSlice } from '@reduxjs/toolkit';

import { GETPLACESREVIEW, ADDPLACESREVIEW } from '../../types/placesTypes';

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
  },
  reducers: {
    reviewsReducer: (state, action) => {
      state.reviews = action.payload;
    },

    addPlaceReview: (state, action) => {
      state.reviews.push(action.payload.response);
    },
  },
});

export const { reviewsReducer, addPlaceReview } = reviewsSlice.actions;

export const getReviewsListSaga = (id) => {
  return {
    type: GETPLACESREVIEW,
    id,
  };
};

export const addPlaceReviewSaga = (review, pecularities, id) => {
  return {
    type: ADDPLACESREVIEW,
    review,
    pecularities,
    id,
  };
};

export default reviewsSlice.reducer;
