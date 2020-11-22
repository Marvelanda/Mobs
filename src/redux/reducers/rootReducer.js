import { combineReducers } from 'redux';
// import usersReducer from './usersReducer';
import placesReducer  from '../features/Places/placeSlice'
import fivePlacesReducer from '../features/Places/fivePlacesSlice'

const rootReducer = combineReducers({
  places: placesReducer,
  fivePlaces: fivePlacesReducer
});

export default rootReducer;
