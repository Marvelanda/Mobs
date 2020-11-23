import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkPlaceSaga } from '../../redux/features/Places/placeSlice';
import style from './style.module.css';

function CheckUserPlace() {
  

  const dispatch = useDispatch();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

  const checkPlace = () => {

    function componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        
      });
    }
    componentDidMount()
  }

  console.log(latitude, longitude);


  return (
    <div className={style.placeCheckBtn}>
      <button onClick={checkPlace}>Засчитать посещение</button>
    </div>
  )
}

export default CheckUserPlace
