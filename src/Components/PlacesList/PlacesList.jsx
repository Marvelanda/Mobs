import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlacesListSaga,
} from '../../redux/features/Places/placeSlice';
import Place from '../Place/Place';

function PlacesList() {
  const dispatch = useDispatch();

  const places = useSelector(state => state.places.places);
  console.log(places);

 useEffect(() => {
  dispatch(getPlacesListSaga())
 }, [])


  return (
    <ul className="placesList">
    {
      places && places.map((el) => {
        return(
          <Place key={el._id} {...el} /> 
        )
      })
    }
    </ul>
  )
}

export default PlacesList
