import style from './style.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlacesListSaga,
  addPlaceRatingSaga,
} from '../../redux/features/Places/placeSlice';
import { getReviewsListSaga } from '../../redux/features/Places/reviewSlice';
import {
  sharePlaceSaga,
  changeShareStatus,
} from '../../redux/features/Places/sharePlaceSlice';
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
import ModalDetails from './ModalDetails';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function DetailedPlace() {
  const [stars, setStars] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  // Для формы-делёжки с другом
  const [value, setValue] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [modalClass, setClass] = useState('');
  const [modalInfo, setModalInfo] = useState({});

  const onClose = () => {
    setClass('animate__animated animate__rollOut');
    setValue('');
    // setTimeout(() => {
    //   setIsOpen(false);
    // }, 500);
  };

  const onOpen = (message) => {
    setClass('animate__animated animate__rollIn');
    setIsOpen(true);
    setModalInfo(message);
  };

  const place = useSelector((state) => state.places.places).find((item) => {
    return item._id === id;
  });

  const visited = useSelector((state) => state.places.visited).find((item) => {
    return item === id;
  });

  const reviews = useSelector((state) => state.reviews.reviews);

  const shareStatus = useSelector((state) => state.sharedPlace.shareStatus);

  useEffect(() => {
    dispatch(getPlacesListSaga());
  }, []);

  useEffect(() => {
    dispatch(getReviewsListSaga(id));
  }, [reviews.length]);

  // для формы-делёжки
  const submitHandler = (e, message) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(sharePlaceSaga(value.trim(), id));
      console.log(value);
    }

    const timerId = setTimeout(() => onOpen(message), 200);
    // dispatch(changeShareStatus());
    // setValue('');
  };
  console.log(value);

  const starsHandler = () => {
    dispatch(addPlaceRatingSaga(id, stars));
    setStars(0);
  };

  return (
    <>
      <div className={style.section}>
        {place && (
          <>
            <div className={style.container}>
              <div className={`${style.description} ${style.blur}`}>
                <h1 className={`${style.heading}`}>{place.placeName}</h1>

                <div className={style['rating-container']}>
                  <p className={style.rating}>Рейтинг: {place.rating} </p>
                  <div className={style.stars}>
                    <StarRatingComponent
                      name='rating'
                      starCount={5}
                      editing={true}
                      value={stars}
                      starColor={'yellow'}
                      onStarClick={(nextValue, prevValue, name) =>
                        setStars(nextValue)
                      }
                      onStarHover={(nextValue, prevValue, name) =>
                        setStars(nextValue)
                      }
                    />
                  </div>

                  <button className={`${style.button}`} onClick={starsHandler}>
                    Поставить оценку
                  </button>
                </div>

                <div className={style.images}>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    effect='coverflow'
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 80,
                      modifier: 1,
                      slideShadows: false,
                    }}
                  >
                    <SwiperSlide>
                      <img src={place.placePhotoUrl} alt='img' width='250px' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={place.placePhotoUrl} alt='img' width='250px' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={place.placePhotoUrl} alt='img' width='250px' />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={`${style.description} ${style.text}`}>
                <h3 className={style['small-headers']}>Описание:</h3>
                <p>{place.description}</p>
                <h3 className={style['small-headers']}>
                  Контактная информация:
                </h3>
                <p>{place.info.address}</p>
                <p>{place.info.tel}</p>
                <a href={place.placeUrl}>
                  <img width='35px' src='/img/instagram.svg' />
                </a>
                <h3 className={style['small-headers']}>Часы работы:</h3>
                <p>{place.info.workingHours}</p>
                <form
                  className={style['add-friend-form']}
                  onSubmit={submitHandler}
                >
                  <input
                    type='text'
                    className={style['share-input']}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Введите username друга'
                  ></input>
                  <button className='button' type='submit'>
                    Поделиться местом
                  </button>
                  {/* {shareStatus && <div>{shareStatus}</div>} */}
                </form>
              </div>
              {value && shareStatus && (
                <ModalDetails open={isOpen} onClose={onClose}>
                  {
                    <div className={modalClass}>
                      <h2>{shareStatus}</h2>
                    </div>
                  }
                </ModalDetails>
              )}
            </div>

            <div className={`${style.container}`}>
              <div
                className={
                  visited
                    ? `${style.reviews_container}`
                    : `${style.reviews_container}`
                }
              >
                <h2 className={`${style.review_heading} text`}>Отзывы</h2>
                {visited && (
                  <Link to={`/places/${id}/reviews`}>
                    <button className={`button ${style.margin}`}>
                      Написать отзыв
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className={`${style.container}`}>
              <ul className={style.center}>
                {reviews.length ? (
                  reviews.map((item) => {
                    return (
                      <Review
                        key={item._id}
                        author={item.author}
                        review={item.review}
                        pecularities={item.pecularities}
                      />
                    );
                  })
                ) : (
                  <li className={`text`}>No reviews</li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={style['section-first-overlay']}></div>
    </>
  );
}

export default DetailedPlace;
