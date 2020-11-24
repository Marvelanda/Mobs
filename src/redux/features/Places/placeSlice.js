import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

import {
  GETPLACESSAGA,
  ADDPLACERATING,
  ADDNEWPLACE,
  CHECKPLACE,
} from '../../types/placesTypes';

export const placeSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    message: '',
  },
  reducers: {
    placesReducer: (state, action) => {
      state.places = action.payload;
    },

    addPlaceRating: (state, action) => {
      const place = state.places.find((item) => {
        return item._id === action.payload.id;
      });

      place.rating = action.payload.rating;
    },

    addNewPlace: (state, action) => {
      state.places = action.payload;
    },

    checkPlace: (state, action) => {

      state.message = action.payload.message;

    },
  },
});

export const {
  placesReducer,
  addNewPlace,
  addPlaceRating,
  checkPlace,
} = placeSlice.actions;

export const getPlacesListSaga = () => {
  return {
    type: GETPLACESSAGA,
  };
};

export const addPlaceRatingSaga = (id, stars) => {
  return {
    type: ADDPLACERATING,
    id,
    stars,
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

export const checkPlaceSaga = (latitude, longitude, user) => {
  return {
    type: CHECKPLACE,
    latitude,
    longitude,
    user,
  };
};

export default placeSlice.reducer;
