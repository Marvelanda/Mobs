import React from 'react';

function Place({placePhotoUrl}, {placeName}, {description}, {rating}, {review}, {visitors}, {placeUrl} ) {
  
  return (
    <>
      <div className='placeCard'>
        <div className='photo'>{placePhotoUrl}</div>
        <div className='placeName'>{placeName}</div>
        <div className='discription'>{description}</div>
        <div className='rating'>{rating}</div>
        <div className='reviews'>{review}</div>
        <div className='visitors'>{visitors}</div>
        <div className='placeUrl'>{placeUrl}</div>
      </div>
    </>
  );
}

export default Place;
