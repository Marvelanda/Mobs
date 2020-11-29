import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import {
  checkPlaceOpenModal,
  setModalClass,
  setModalCheckPlace,
  openPlaceMark,
} from '../../redux/features/Places/placeSlice';

function CheckUserPlace({ onClick: onOpenPlaceMessage }) {
  const dispatch = useDispatch();
  const user = localStorage.user;
  const message = useSelector((state) => state.places.message);

  const checkPlace = (message) => {
    dispatch(openPlaceMark(false));
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        checkPlaceSaga(
          position.coords.latitude,
          position.coords.longitude,
          user
        )
      );
    });
    dispatch(setModalClass('animate__animated animate__rollIn'));
    dispatch(checkPlaceOpenModal(true));
    dispatch(setModalCheckPlace(message));
  };

  return (
    <div className={style.placeCheckBtn}>
      <Link onClick={() => checkPlace(message)}>Посетить</Link>
    </div>
  );
}

export default CheckUserPlace;
