import style from './style.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlacesListSaga,
  addPlaceReviewSaga,
} from '../../redux/features/Places/placeSlice';
import { useParams } from 'react-router-dom';
import Review from '../Review/Review';

function DetailedPlace() {
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  const place = useSelector((state) => state.places.places).find((item) => {
    return item._id === id;
  });

  console.log(place);
  useEffect(() => {
    dispatch(getPlacesListSaga());
  }, []);

  const handlerReview = (evt) => {
    setReview(evt.target.value);
  };

  const addReview = (evt) => {
    evt.preventDefault();
    dispatch(addPlaceReviewSaga(review, id));
    setReview('');
  };

  return (
    <div className={style.section}>
      {place && (
        <>
          <div className={style.container}>
            <div className={style.items}>
              <h1 className={`${style.heading}`}>{place.placeName}</h1>
              <div>
                <img src={place.placePhotoUrl} alt='img' width='150px' />
                <img src={place.placePhotoUrl} alt='img' width='150px' />
                <img src={place.placePhotoUrl} alt='img' width='150px' />
              </div>
            </div>
            <div className={`${style.items} text`}>
              <p>{place.description}</p>
              <h3>Контакты:</h3>
              <p>{place.info.address}</p>
              <p>{place.info.tel}</p>
              <p>
                Часы работы:
                <br /> {place.info.workingHours}
              </p>
              <p>{place.placeUrl}</p>
              <p>Уровень заведения: {place.rating}</p>
            </div>
          </div>
          <div className={`${style.container} ${style.reviews_container}`}>
            <h2>Отзывы</h2>
            <form onSubmit={addReview}>
              <input type='text' onChange={handlerReview} value={review} />
              <button type='submit'>Добавить отзыв</button>
            </form>
          </div>
          <div className={style.container}>
            {!!place.review.length &&
              place.review.map((item) => {
                const singleReview = Object.entries(item);

                return (
                  <Review
                    key={singleReview[0][1]}
                    author={singleReview[0][0]}
                    review={singleReview[0][1]}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default DetailedPlace;
