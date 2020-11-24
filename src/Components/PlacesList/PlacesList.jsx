import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesListSaga } from '../../redux/features/Places/placeSlice';
import Place from '../Place/Place';
import style from './style.module.css';

function PlacesList() {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.places.places);
  const userID = localStorage.getItem('user');
  console.log(places);
  useEffect(() => {
    dispatch(getPlacesListSaga(userID));
  }, []);

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {places.length &&
          places.map((el) => {
            return <Place key={el._id} {...el} />;
          })}
      </ul>
    </div>
  );
}

export default PlacesList;
