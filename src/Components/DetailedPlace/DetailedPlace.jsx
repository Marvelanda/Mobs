import style from './style.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlacesListSaga,
  addPlaceReviewSaga,
} from '../../redux/features/Places/placeSlice';
import { Link, useParams } from 'react-router-dom';
import Review from '../Review/Review';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import StarRatingComponent from 'react-star-rating-component';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function DetailedPlace() {
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  const place = useSelector((state) => state.places.places).find((item) => {
    return item._id === id;
  });

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
            <div className={`${style.description} ${style.blur}`}>
              <h1 className={`${style.heading}`}>{place.placeName}</h1>
              <div className={`${style.heading}`}>
                <StarRatingComponent
                  name='rating'
                  starCount={5}
                  editing={false}
                  value={place.rating}
                  starColor={'yellow'}
                />
              </div>

              <div className={style.images}>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  effect='coverflow'
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 80,
                    modifier: 4,
                    slideShadows: false,
                  }}
                >
                  <SwiperSlide>
                    <img src={place.placePhotoUrl} alt='img' width='150px' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={place.placePhotoUrl} alt='img' width='150px' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={place.placePhotoUrl} alt='img' width='150px' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={place.placePhotoUrl} alt='img' width='150px' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={place.placePhotoUrl} alt='img' width='150px' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={`${style.description} ${style.blur} text`}>
              <h3>Описание:</h3>
              <p>{place.description}</p>
              <h3>Контактная информация:</h3>
              <p>{place.info.address}</p>
              <p>{place.info.tel}</p>
              <p>{place.placeUrl}</p>
              <h3>Часы работы:</h3>
              <p>{place.info.workingHours}</p>
            </div>
          </div>
          <div className={`${style.container}`}>
            <div className={`${style.reviews_container} ${style.blur}`}>
              <h2 className={style.review_heading}>Отзывы</h2>
              <Link to={`/places/${id}/reviews`}>
                <button className='button'>Написать отзыв</button>
              </Link>
            </div>

            {/* <form onSubmit={addReview}>
              <input
                className={style.input}
                type='text'
                onChange={handlerReview}
                value={review}
              />
              <button className='button' type='submit'>
                Добавить отзыв
              </button>
            </form> */}
          </div>
          <div className={`${style.container} ${style.blur}`}>
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
