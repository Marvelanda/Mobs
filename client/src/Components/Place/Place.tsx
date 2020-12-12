import React from 'react';
import { Link } from 'react-router-dom';
import { IPlace } from '../../redux/types/placesTypes';
import style from './style.module.css';

const Place: React.FC<IPlace> = ({ placePhotoUrl, placeName, _id }) => {
  return (
    <li className={style['list-item']}>
      <Link to={`/places/${_id}`}>
        <h2 className={style.headers}>{placeName}</h2>
        <img className={style.img} src={placePhotoUrl[0]} alt='foto' />
      </Link>
    </li>
  );
};

export default Place;
