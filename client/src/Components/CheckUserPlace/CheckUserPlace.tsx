import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import {
  checkPlaceOpenModal,
  setModalClass,
  setModalCheckPlace,
  openPlaceMark,
} from '../../redux/features/Places/placeSlice';
import { RootState } from '../../redux/store';

const CheckUserPlace: React.FC = () => {
  const dispatch = useDispatch();
  const user: string = localStorage.user;

  const message: string = useSelector(
    (state: RootState) => state.places.message
  );

  const checkPlace = (message: string): void => {
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
    <div>
      <Link to='/' onClick={() => checkPlace(message)}>
        Посетить
      </Link>
    </div>
  );
};

export default CheckUserPlace;
