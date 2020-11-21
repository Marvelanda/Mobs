import React from 'react';
import { Link } from 'react-router-dom';

function Place({ placeName, _id }) {
  return (
    <li className='placeCard text'>
      <div className='photo'></div>
      <div className='placeName'>
        <Link to={`/places/${_id}`}>{placeName}</Link>
      </div>
      <div className='disscription'></div>
      <div className='rating'></div>
      <div className='reviews'></div>
      <div className='visitors'></div>
      <div className='placeUrl'></div>
    </li>
  );
}

export default Place;
