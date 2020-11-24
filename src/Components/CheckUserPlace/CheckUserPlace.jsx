import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import style from './style.module.css';

function CheckUserPlace() {

  const message = useSelector((state) => state.places.message)
  
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
      <button onClick={checkPlace}>Засчитать посещение</button>
  { message && <div className='text'>{message}</div> }
    </div>
  )
}

export default CheckUserPlace
