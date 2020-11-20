import { combineReducers } from 'redux';
// import usersReducer from './usersReducer';
import placesReducer  from '../features/Places/placeSlice'

const rootReducer = combineReducers({
  // users: usersReducer,
  places: placesReducer
});

export default rootReducer;
