import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

function Place({ placePhotoUrl, placeName, _id }) {
  return (
    <li className={style['list-item']}>
      <h2 className={style.headers}>
        <Link to={`/places/${_id}`}>{placeName}</Link>
      </h2>
      <Link to={`/places/${_id}`}>
        <img className={style.img} src={placePhotoUrl} alt='foto' />
      </Link>{' '}
    </li>
  );
}

export default Place;
