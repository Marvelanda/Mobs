import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Types,
  ReviewsState,
  IReview,
  PlaceActionTypes,
} from '../../types/placesTypes';

const initialState: ReviewsState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviewsReducer: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload;
    },

    addPlaceReview: (state, action: PayloadAction<IReview>) => {
      state.reviews.push(action.payload);
    },
  },
});

export const { reviewsReducer, addPlaceReview } = reviewsSlice.actions;

export const getReviewsListSaga = (id: string): PlaceActionTypes => {
  return {
    type: Types.GETPLACESREVIEW,
    id,
  };
};

export const addPlaceReviewSaga = (
  review: string,
  pecularities: string,
  id: string
): PlaceActionTypes => {
  return {
    type: Types.ADDPLACESREVIEW,
    review,
    pecularities,
    id,
  };
};

export default reviewsSlice.reducer;
