import { createSlice, createAction } from '@reduxjs/toolkit'

const fivePlacesSlice = createSlice({
  name: 'fivePlaces',
  initialState: {
    fivePlaces: []
  },
  reducers: {
    fivePlacesReducer(state, action) {
      const { fivePlacesArray } = action.payload;
      state = fivePlacesArray
    }
  }
})

export const {
  fivePlacesReducer
} = fivePlacesSlice.actions

export const getFivePlacesSaga = () => {
  return {
    type: 'GET_FIVE_PLACES'
  }
}

export default fivePlacesSlice.reducer

