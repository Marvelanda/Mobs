import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getPlacesListSaga,
} from '../../redux/features/Places/placeSlice';
import Place from '../Place/Place';

function PlacesList() {

  const plases = useSelector(state => state.plases);

  useEffect(() => {
    getPlacesListSaga();
  }, [])


  return (
    <ul className="placesList">
    {
      plases && plases.map((el) => {
        return(
          <Place key={el._id} {...el} />
        )
      })
    }
    </ul>
  )
}

export default PlacesList
