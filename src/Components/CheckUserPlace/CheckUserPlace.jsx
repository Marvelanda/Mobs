import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import { checkPlaceOpenModal, setModalClass, setModalCheckPlace } from '../../redux/features/Places/placeSlice'

function CheckUserPlace({onClick:onOpenPlaceMessage}) {
  
  const dispatch = useDispatch();
  const user = localStorage.user
  const message = useSelector((state) => state.places.message)


  const checkPlace = (message) => {
    console.log('ЧТО ПРОИСХОДИТ???');
      navigator.geolocation.getCurrentPosition(function(position) {
       dispatch(checkPlaceSaga(position.coords.latitude, position.coords.longitude, user));
      });
    dispatch(setModalClass('animate__animated animate__rollIn'));
    dispatch(checkPlaceOpenModal(true))
    dispatch(setModalCheckPlace(message));
  }
  
 

  return (
    <div className={style.placeCheckBtn}>
<<<<<<< HEAD
      <Link onClick={() => checkPlace(message)}>Посетить</Link>
=======
      <button onClick={checkPlace}>Засчитать посещение</button>
  { message && <div className='text'>{message}</div> }
>>>>>>> d12840db759fa04a705947ef910da008674f8cae
    </div>
  )
}

export default CheckUserPlace
