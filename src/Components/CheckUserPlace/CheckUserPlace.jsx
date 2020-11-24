import React from 'react'
import { useDispatch } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import style from './style.module.css';

function CheckUserPlace() {
  
  const dispatch = useDispatch();

  const checkPlace = () => {
    function componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        dispatch(checkPlaceSaga(position.coords.latitude, position.coords.longitude));
      });
    }
    componentDidMount()
  }
  
 

  return (
    <div className={style.placeCheckBtn}>
      <button onClick={checkPlace}>Засчитать посещение</button>
    </div>
  )
}

export default CheckUserPlace
