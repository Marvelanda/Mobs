import { createSlice } from '@reduxjs/toolkit';

import {
  GETPLACESSAGA,
  ADDPLACESREVIEW,
  ADDNEWPLACE,
  CHECKPLACE,
} from '../../types/placesTypes';

export const placeSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
  },
  reducers: {
    placesReducer: (state, action) => {
      state.places = action.payload;
    },

    addPlaceReview: (state, action) => {
      const place = state.places.find((item) => {
        return item._id === action.payload.id;
      });
      place.review.push({
        [action.payload.response.author]: action.payload.response.review,
      });
    },

    addNewPlace: (state, action) => {
      state.places = action.payload;
    },

    checkPlace: (state, action) => {
      state.places = action.payload;
    },

  },
});

export const {
  placesReducer,
  addPlaceReview,
  addNewPlace,
  checkPlace,
  addPlacePecularity,
} = placeSlice.actions;

export const getPlacesListSaga = () => {
  return {
    type: GETPLACESSAGA,
  };
};

export const addPlaceReviewSaga = (review, stars, pecularities, id) => {
  return {
    type: ADDPLACESREVIEW,
    review,
    stars,
    pecularities,
    id,
  };
};

export const addNewPlaceSaga = (
  placeName,
  placeUrl,
  placePhotoUrl,
  address,
  phone,
  workingHours,
  category,
  rating,
  geometry,
  description
) => {
  return {
    type: ADDNEWPLACE,
    placeName,
    placeUrl,
    placePhotoUrl,
    address,
    phone,
    workingHours,
    category,
    rating,
    geometry,

    description,
  };
};

export const checkPlaceSaga = () => {
  return {
    type: CHECKPLACE,
  };
};

export default placeSlice.reducer;
