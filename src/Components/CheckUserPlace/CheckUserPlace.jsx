import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import { Link } from 'react-router-dom';
import style from './style.module.css';

function CheckUserPlace({onClick:onOpenPlaceMessage}) {
  
  const dispatch = useDispatch();
  const user = localStorage.user

  const checkPlace = () => {
    function componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        dispatch(checkPlaceSaga(position.coords.latitude, position.coords.longitude, user));
      });
    }
    componentDidMount()
  }
  
 

  return (
    <div className={style.placeCheckBtn}>
      <Link onClick={checkPlace}>Посетить</Link>
    </div>
  )
}

export default CheckUserPlace
