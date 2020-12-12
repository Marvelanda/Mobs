import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Types,
  PlacesState,
  PlaceActionTypes,
  ModalState,
  IPlace,
  PlacesAction,
} from '../../types/placesTypes';

const initialState: PlacesState = {
  rating: 1,
  _id: '',
  places: [],
  message: '',
  visited: [],
  checkPlaceModalOpened: false,
  modalCheckPlaceInfo: '',
  isOpenPlaceMark: false,
  modalClass: '',
  modalPlaceMarkInfo: {
    description: '',
    info: {
      address: '',
      workingHours: '',
      phone: '',
    },
    placeName: 'string',
    placePhotoUrl: [],
    _id: '',
  },
};

export const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    placesReducer: (state, action: PayloadAction<PlacesAction>) => {
      state.places = action.payload.places;
      state.visited = action.payload.visited;
    },

    addPlaceRating: (state, action: PayloadAction<PlacesState>) => {
      const place = state.places.find((item) => {
        return item._id === action.payload._id;
      });

      place!.rating = action.payload.rating;
    },

    addNewPlace: (state, action: PayloadAction<IPlace[]>) => {
      state.places = action.payload;
    },

    checkPlace: (state, action: PayloadAction<PlacesState>) => {
      state.message = action.payload.message;
    },

    checkPlaceOpenModal: (state, action: PayloadAction<boolean>) => {
      state.checkPlaceModalOpened = action.payload;
    },

    setModalCheckPlace: (state, action: PayloadAction<string>) => {
      state.modalCheckPlaceInfo = action.payload;
    },

    openPlaceMark: (state, action: PayloadAction<boolean>) => {
      state.isOpenPlaceMark = action.payload;
    },

    setModalClass: (state, action: PayloadAction<string>) => {
      state.modalClass = action.payload;
    },

    setModalPlaceMarkInfo: (state, action: PayloadAction<ModalState>) => {
      state.modalPlaceMarkInfo = action.payload;
    },
  },
});

export const {
  placesReducer,
  addNewPlace,
  addPlaceRating,
  checkPlace,
  checkPlaceOpenModal,
  setModalCheckPlace,
  openPlaceMark,
  setModalClass,
  setModalPlaceMarkInfo,
} = placeSlice.actions;

export const getPlacesListSaga = () => {
  return {
    type: Types.GETPLACESSAGA,
  };
};

export const addPlaceRatingSaga = (
  id: string,
  stars: number
): PlaceActionTypes => {
  return {
    type: Types.ADDPLACERATING,
    id,
    stars,
  };
};

export const checkPlaceSaga = (
  latitude: number,
  longitude: number,
  user: string
): PlaceActionTypes => {
  return {
    type: Types.CHECKPLACE,
    latitude,
    longitude,
    user,
  };
};

export default placeSlice.reducer;
